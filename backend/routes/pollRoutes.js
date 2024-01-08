// routes/pollRoutes.js
const express = require("express");
const Poll = require("../models/poll");

const router = express.Router();

// Fetch all polls
router.get("/", async (req, res) => {
  try {
    const polls = await Poll.find({ active: true });
    res.json(polls);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new poll
router.post("/", async (req, res) => {
  const { question, options } = req.body;

  try {
    const newPoll = new Poll({
      question,
      options,
      responses: options.map((option) => ({ option, count: 0 })),
    });

    const savedPoll = await newPoll.save();
    res.status(201).json(savedPoll);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Submit answer for a poll
router.post("/:pollId/submit", async (req, res) => {
  const { pollId } = req.params;
  const { answer } = req.body;

  try {
    const poll = await Poll.findById(pollId);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    if (!poll.active) {
      return res.status(400).json({ error: "Poll is not active" });
    }

    const selectedOption = poll.responses.find(
      (response) => response.option === answer
    );

    if (!selectedOption) {
      return res.status(400).json({ error: "Invalid answer option" });
    }

    selectedOption.count += 1;
    await poll.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch poll results (for admin)
router.get("/:pollId/results", async (req, res) => {
  const { pollId } = req.params;

  try {
    const poll = await Poll.findById(pollId);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    const results = poll.responses.map((response) => ({
      option: response.option,
      count: response.count,
    }));

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

/*

Create a Poll:

Endpoint: POST http://localhost:5000/api/poll

{
  "question": "What is your favorite programming language?",
  "options": ["JavaScript", "Python", "Java", "C++"]
}

Submit Answers:

Endpoint: POST http://localhost:5000/api/poll/:pollId/submit


{
  "answer": "JavaScript"
}

Endpoint: GET http://localhost:5000/api/poll/:pollId/results


*/
