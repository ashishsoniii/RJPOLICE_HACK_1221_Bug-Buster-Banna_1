// models/feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  firNumber: { type: Number, unique: true, required: true },
  mobile: Number,
  name: String,
  address: String,
  city: String,
  pinCode: Number,
  email: String,
  policeDistrict: String,
  policeStation: String,
  rating: Number,
  details: String,
  externalFill: { type: Boolean, default: false },
  policeStationRating: {
    higenic: { type: Number, min: 1, max: 5 },
    behavior: { type: Number, min: 1, max: 5 },
    easeOfProcess: { type: Number, min: 1, max: 5 },
    overall: { type: Number, min: 1, max: 5 },
  },
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
