//models/chatbotFeedback.js

const mongoose=require('mongoose');

const chatbotFeedbackSchema=new mongoose.Schema({
    name:{type:String},
    firNo:{type:Number},
    email:String,
    contactNo:Number,
    overallRating:Number
});

const ChatbotFeedback=mongoose.model("ChatbotFeedback",chatbotFeedbackSchema);

module.exports=ChatbotFeedback;