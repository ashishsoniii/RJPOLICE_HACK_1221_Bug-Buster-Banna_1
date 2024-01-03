// routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback");
const PostFirFeedback = require("../models/postFirFeedback");

// Fill Feedback
// routes/feedbackRoutes.js
router.post("/fillFeedback", async (req, res) => {
  try {
    const {
      firNumber,
      mobile,
      name,
      address,
      city,
      pinCode,
      email,
      policeDistrict,
      policeStation,
      rating,
      details,
      externalFill,
      policeStationRating,
      responseTimeRating,
      problemResolutionRating,
      accessibilityRating,
      followUpProcessRating,
      suggestionsImprovements,
      safetyPerception,
    } = req.body;

    // Check if the FIR number is unique
    const existingFeedback = await Feedback.findOne({ firNumber });
    if (existingFeedback) {
      return res
        .status(400)
        .json({ message: "Feedback with the same FIR number already exists." });
    }

    const feedback = new Feedback({
      firNumber,
      mobile,
      name,
      address,
      city,
      pinCode,
      email,
      policeDistrict,
      policeStation,
      rating,
      details,
      externalFill,
      policeStationRating,
      responseTimeRating,
      problemResolutionRating,
      accessibilityRating,
      followUpProcessRating,
      suggestionsImprovements,
      safetyPerception,
    });

    await feedback.save();

    // Send FIR number back to frontend
    res
      .status(201)
      .json({ message: "Feedback submitted successfully!", firNumber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Display All Submitted Feedback
router.get("/allFeedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.find();
    res.status(200).json(allFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Feedback by FIR Number
router.get("/feedback/:firNumber", async (req, res) => {
  try {
    const { firNumber } = req.params;
    const feedback = await Feedback.findOne({ firNumber });

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Feedback by Email
router.get("/feedbackByEmail/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const feedback = await Feedback.findOne({ email });

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Feedback by Mobile Number
router.get("/feedbackByMobile/:mobile", async (req, res) => {
  try {
    const { mobile } = req.params;
    const feedback = await Feedback.findOne({ mobile });

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fill Post-FIR Feedback
router.post("/fillPostFirFeedback", async (req, res) => {
  try {
    const {
      firNumber,
      name,
      address,
      pinCode,
      city,
      email,
      policeDistrict,
      policeStation,
      details,
      timelyResolved,
      satisfactionLevel,
      externalFill,
      comments,
      policeStationRating,
      responseTimeRating,
      problemResolutionRating,
      accessibilityRating,
      followUpProcessRating,
      suggestionsImprovements,
      safetyPerception,
    } = req.body;

    // Auto-assign FIR number sequentially
    // const latestPostFeedback = await PostFirFeedback.findOne().sort({ firNumber: -1 });
    // const firNumber = latestPostFeedback ? latestPostFeedback.firNumber + 1 : 1;

    const postFeedback = new PostFirFeedback({
      firNumber,
      name,
      address,
      pinCode,
      city,
      email,
      policeDistrict,
      policeStation,
      details,
      timelyResolved,
      satisfactionLevel,
      comments,
      externalFill,
      policeStationRating,
      responseTimeRating,
      problemResolutionRating,
      accessibilityRating,
      followUpProcessRating,
      suggestionsImprovements,
      safetyPerception,
    });

    await postFeedback.save();

    // Send FIR number back to frontend
    res.status(201).json({
      message: "Post-FIR Feedback submitted successfully!",
      firNumber,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Display All Submitted Post-FIR Feedback
router.get("/allPostFirFeedback", async (req, res) => {
  try {
    const allPostFeedback = await PostFirFeedback.find();
    res.status(200).json(allPostFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Post-FIR Feedback by FIR Number
router.get("/postFirFeedback/:firNumber", async (req, res) => {
  try {
    const { firNumber } = req.params;
    const postFeedback = await PostFirFeedback.findOne({ firNumber });

    if (!postFeedback) {
      return res.status(404).json({ message: "Post-FIR Feedback not found" });
    }

    res.status(200).json(postFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Post-FIR Feedback by Email
router.get("/postFirFeedbackByEmail/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const postFeedback = await PostFirFeedback.findOne({ email });

    if (!postFeedback) {
      return res.status(404).json({ message: "Post-FIR Feedback not found" });
    }

    res.status(200).json(postFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Fetch Post-FIR Feedback by Mobile Number
router.get("/postFirFeedbackByMobile/:mobile", async (req, res) => {
  try {
    const { mobile } = req.params;
    const postFeedback = await PostFirFeedback.findOne({ mobile });

    if (!postFeedback) {
      return res.status(404).json({ message: "Post-FIR Feedback not found" });
    }

    res.status(200).json(postFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/totalFeedbacksCount", async (req, res) => {
  try {
    const postFeedbackCount = await PostFirFeedback.countDocuments();
    const feedbackCount = await Feedback.countDocuments();

    res.status(200).json({postFeedbackCount, feedbackCount});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
