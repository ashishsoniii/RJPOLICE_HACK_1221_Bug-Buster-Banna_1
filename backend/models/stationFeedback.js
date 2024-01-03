//models/stationFeedback.js
const mongoose = require('mongoose');

const stationFeedbackSchema = new mongoose.Schema({
    complainant:
    {
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        address: String,
        city: String,
        pinCode: Number,
        email: String,
    },
    accused:
    {
        isPoliceOfficer: { type: Boolean, default: false },
        officerName: { type: String, default: "" },
        policeDistrict: String,
        policeStation: String,
    },
    complaintDetails:
    {
        description:String,
        date:{type:Date, default:Date.now},
    }
});

const StationFeedback=mongoose.model("StationFeedback",stationFeedbackSchema);

module.exports=StationFeedback;