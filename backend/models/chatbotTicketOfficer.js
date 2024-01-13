//models/chatbotTicketOfficer.js

const mongoose=require('mongoose');

const chatbotTicketOfficerSchema=new mongoose.Schema({
    name:String,
    contactNumber:Number,
    officerName:String,
    district:String,
    stationName:String,
    description:String
})

const ChatbotTicketOfficer=mongoose.model("ChatbotTicketOfficer",chatbotTicketOfficerSchema);

module.exports=ChatbotTicketOfficer;