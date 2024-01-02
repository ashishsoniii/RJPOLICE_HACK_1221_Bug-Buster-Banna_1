// models/postFirFeedback.js
const mongoose = require('mongoose');

const postFirFeedbackSchema = new mongoose.Schema({
  firNumber: { type: Number, unique: true, required: true },
  timestamp: { type: Date, default: Date.now },
  date: { type: String, default: new Date().toISOString().split('T')[0] },
  name: String,
  address: String,
  city: String,
  email: String,
  policeDistrict: String,
  policeStation: String,
  details: String,
  timelyResolved: Boolean,
  satisfactionLevel: Number,
  comments: String,
  externalFill: { type: Boolean, default: false },
  policeStationRating: {
    higenic: { type: Number, min: 1, max: 5 },
    behavior: { type: Number, min: 1, max: 5 },
    easeOfProcess: { type: Number, min: 1, max: 5 },
    overall: { type: Number, min: 1, max: 5 },
  },
  responseTimeRating: { type: Number, min: 1, max: 5 },
  problemResolutionRating: { type: Number, min: 1, max: 5 },
  accessibilityRating: { type: Number, min: 1, max: 5 },
  followUpProcessRating: { type: Number, min: 1, max: 5 },
  suggestionsImprovements: String,
  safetyPerception: { type: Number, min: 1, max: 5 },
});

const PostFirFeedback = mongoose.model('PostFirFeedback', postFirFeedbackSchema);

module.exports = PostFirFeedback;
