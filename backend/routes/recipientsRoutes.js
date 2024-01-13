// routes/bulkContacts.js

const express = require("express");
const router = express.Router();
const BulkContacts = require("../models/BulkContacts");

// Create a recipient
router.post("/create", async (req, res) => {
  try {
    const { email, name, contact, campaignTypes } = req.body;

    // Check if the recipient with the same email and campaign types exists
    const existingRecipient = await BulkContacts.findOne({
      email,
      campaignTypes: { $all: campaignTypes },
    });

    if (existingRecipient) {
      return res.status(400).json({ error: "Already subscribed" });
    }

    // Check if the recipient with the same email exists but with different campaign types
    const recipientWithSameEmail = await BulkContacts.findOne({ email });
    if (recipientWithSameEmail) {
      // Add the new campaign types to the existing recipient
      recipientWithSameEmail.campaignTypes.push(...campaignTypes);
      await recipientWithSameEmail.save();

      return res.status(200).json({
        message: "Email exists, added new campaign types",
        recipient: recipientWithSameEmail,
      });
    }

    // If the recipient doesn't exist, create a new one
    const newRecipient = new BulkContacts({
      email,
      name,
      contact,
      campaignTypes,
    });

    await newRecipient.save();

    res.status(201).json({
      message: "Recipient created successfully",
      recipient: newRecipient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all recipients
router.get("/", async (req, res) => {
  try {
    const recipients = await BulkContacts.find();
    res.status(200).json(recipients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific recipient by email
router.get("/email/:email", async (req, res) => {
  try {
    const recipient = await BulkContacts.findOne({ email: req.params.email });
    if (!recipient) {
      return res.status(404).json({ error: "Recipient not found" });
    }
    res.status(200).json(recipient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a recipient by email
router.put("/update/:email", async (req, res) => {
  try {
    const recipient = await BulkContacts.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    if (!recipient) {
      return res.status(404).json({ error: "Recipient not found" });
    }
    res
      .status(200)
      .json({ message: "Recipient updated successfully", recipient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a recipient by email
router.delete("/delete/:email", async (req, res) => {
  try {
    const recipient = await BulkContacts.findOneAndDelete({
      email: req.params.email,
    });
    if (!recipient) {
      return res.status(404).json({ error: "Recipient not found" });
    }
    res
      .status(200)
      .json({ message: "Recipient deleted successfully", recipient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get unique emails for a specific campaign type
router.get("/campaign/:campaignType/uniqueEmails", async (req, res) => {
  try {
    const uniqueEmails = await BulkContacts.distinct("email", {
      campaignTypes: req.params.campaignType,
    });
    res.status(200).json(uniqueEmails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get unique emails for multiple campaign types
router.get("/campaigns/uniqueEmails", async (req, res) => {
  try {
    const { campaignTypes } = req.query;

    if (!campaignTypes || !Array.isArray(campaignTypes)) {
      return res
        .status(400)
        .json({ error: "Invalid or missing campaign types" });
    }

    const uniqueEmails = await BulkContacts.distinct("email", {
      campaignTypes: { $in: campaignTypes },
    });
    res.status(200).json(uniqueEmails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
