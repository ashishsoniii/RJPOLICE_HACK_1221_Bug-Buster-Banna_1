//models/chatbotTicketStation.js

const mongoose=require('mongoose');

const chatbotTicketStationSchema=new mongoose.Schema({
    name:String,
    contactNumber:Number,
    district:String,
    stationName:String,
    description:String
})

const ChatbotTicketStation=mongoose.model("ChatbotTicketStation",chatbotTicketStationSchema);

module.exports=ChatbotTicketStation;