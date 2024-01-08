// models/Poll.js
const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: String,
  options: [String],
  createDate: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  responses: [
    {
      option: String,
      count: { type: Number, default: 0 },
    },
  ],
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
