const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const generateToken = (id, time) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: time });
};

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, gender, phoneNumber } = req.body;
  
    // Validation
    if (!name || !email || !password || !gender || !phoneNumber) {
      return res.status(400).json({ error: "Incomplete or incorrect registration data" });
    }
  
    if (password.length < 6 || password.length > 23) {
      return res.status(400).json({ error: "Password must be between 6 and 23 characters" });
    }
  
    const emailUsed = await User.findOne({ email });
    if (emailUsed) {
      return res.status(400).json({ error: "Email already in use" });
    }
  
    // Encrypt password before saving to DB server
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
      phoneNumber,
    });
  
    const token = generateToken(user._id, "2w");
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 * 2),
      sameSite: "none",
      secure: true,
    });
  
    res.status(201).json({
      _id: user._id,
      name,
      email,
      gender,
      token,
    });
  });
  
// Login
const loginUser = asyncHandler(async (req, res) => {
  const { userName, password, phoneNumber } = req.body;
  if (!userName || !password || !phoneNumber) {
    res.status(400);
    throw new Error("You logged in incomplete or incorrectly!");
  }
  const user = await User.findOne({ userName });
  if (!user) {
    res.status(400);
    throw new Error("Username not used!");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  const token = generateToken(user._id, "1d");
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    sameSite: "none",
    secure: true,
  });

  if (user && passwordIsCorrect) {
    const {
      _id,
      name,
      userName,
      email,
      gender,
      privateAccount,
      ppLink,
      bio,
      followersId,
      followingId,
      messagingUsers,
      followingRequest,
    } = user;
    res.status(200).json({
      _id,
      name,
      userName,
      email,
      gender,
      privateAccount,
      ppLink,
      bio,
      followersId,
      followingId,
      messagingUsers,
      followingRequest,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
});

// Logout
const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Logged out!" });
});

// Get User
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const {
      _id,
      name,
      userName,
      email,
      password,
      gender,
      privateAccount,
      ppLink,
      bio,
      followersId,
      followingId,
      messagingUsers,
      followingRequest,
    } = user;
    res.status(200).json({
      _id,
      name,
      userName,
      email,
      gender,
      privateAccount,
      ppLink,
      bio,
      followersId,
      followingId,
      messagingUsers,
      followingRequest,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

// Get Basic Info
const getBasicInfo = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  const user = await User.findOne({ userName: userName });
  if (user) {
    const {
      _id,
      name,
      userName,
      gender,
      privateAccount,
      ppLink,
      bio,
      followersId,
      followingId,
    } = user;
    if (privateAccount) {
      res.status(200).json({
        _id,
        name,
        userName,
        gender,
        privateAccount,
        ppLink,
        bio,
      });
    } else {
      res.status(200).json({
        _id,
        name,
        userName,
        gender,
        privateAccount,
        ppLink,
        bio,
        followersId,
        followingId,
      });
    }
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const searchUser = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  if (userName.length >= 1) {
    const users = await User.find({
      userName: { $regex: `^${userName}`, $options: "i" },
    }).limit(6);
    if (users && users.length) {
      const userNames = [];
      users.forEach((user) => {
        userNames.push({
          name: user.name,
          userName: user.userName,
          ppLink: user.ppLink,
        });
      });
      res.status(200).json(userNames);
    } else {
      res.status(200).json([]);
    }
  } else {
    res.status(200).json([]);
  }
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  getBasicInfo,
  searchUser,
};
