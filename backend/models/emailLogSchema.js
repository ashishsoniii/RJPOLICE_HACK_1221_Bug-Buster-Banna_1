const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  isSuccess: {
    type: Boolean,
    default: false,
  },
});

const EmailLog = mongoose.model('EmailLog', emailLogSchema);

module.exports = { EmailLog };
