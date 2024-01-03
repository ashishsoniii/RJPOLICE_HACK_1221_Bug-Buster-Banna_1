//models/eFir.js
const mongoose = require('mongoose');

const eFirSchema = new mongoose.Schema({
    firNumber: { type: Number, unique: true, required: true },
    complainant: {
        name: { type: String, required: true },
        contactNumber: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
    },
    incidentDetails: {
        date: { type: Date, default: Date.now },
        location: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true }, // theft,assault
    },
    // Additional details about the accused or involved parties
    accused: {
        name: { type: String },
        address: { type: String },
        contactNumber: { type: String },
        description: { type: String },
    },
    // Status of the E-FIR (Registered, Under Investigation, Closed, etc.)
    status: {
        type: String,
        enum: ['Registered', 'Pending Review', 'Under Investigation', 'Closed'],
        default: 'Registered',
    },
    // Resolution details if the case is closed
    resolutionDetails: {
        description: { type: String },
        dateResolved: { type: Date },
    },
})

const Efir=mongoose.model("Efir",eFirSchema);

module.exports=Efir;