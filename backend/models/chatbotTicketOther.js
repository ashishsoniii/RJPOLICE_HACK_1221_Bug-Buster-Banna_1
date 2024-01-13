//models/chatbotTicketOther.js

const mongoose=require('mongoose');

const chatbotTicketOtherSchema=new mongoose.Schema({
    name:String,
    contactNumber:Number,
    topic:String,
    description:String
});

const ChatbotTicketOther=mongoose.model("ChatbotTicketOther",chatbotTicketOtherSchema);

module.exports=ChatbotTicketOther;