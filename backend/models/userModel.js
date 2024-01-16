const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The value "name" must be entered'],
    },
    email: {
      type: String,
      required: [true, 'The value "email" must be entered'],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid e-mail",
      ],
    },
    password: {
      type: String,
      required: [true, 'The value "password" must be entered'],
      minLength: [6, "Your password must be at least 6 characters"],
    },
    gender: {
      type: String,
      required: [true, 'The value "gender" must be entered'],
    },
    phoneNumber: {
      type: String, // Assuming phone number is stored as a string
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
