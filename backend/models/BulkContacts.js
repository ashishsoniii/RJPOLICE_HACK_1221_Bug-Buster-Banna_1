const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String },
  contact: { type: String },
  campaignTypes: [{ type: String, required: true }],
});

const BulkContacts = mongoose.model("BulkContacts", recipientSchema);

module.exports = BulkContacts;
