const express=require("express");
const ChatbotFeedback=require("../models/chatbotFeedback");
const ChatbotTicketStation=require("../models/chatbotTicketStation");
const ChatbotTicketOfficer = require("../models/chatbotTicketOfficer");
const ChatbotTicketOther = require("../models/chatbotTicketOther");
const router=express.Router();

router.post("/createChatbotFeedback",async (req,res) =>{
    try
    {
        var {
            name,
            firNo,
            email,
            contactNo,
            overallRating
        }=req.body;
        if(overallRating==="Excellent")
        {
            overallRating=5;
        }
        else if (overallRating==="Good")
        {
            overallRating=4;
        }
        else if (overallRating==="Average")
        {
            overallRating=3;
        }
        else if (overallRating==="Below Average")
        {
            overallRating=2;
        }
        else if (overallRating==="Poor")
        {
            overallRating=1;
        }

        const newChatbotFeedback=new ChatbotFeedback({
            name,
            firNo,
            email,
            contactNo,
            overallRating,
        });
        await newChatbotFeedback.save();

        res.status(201).json({message:"Your form has been submitted"});

    } catch ( error ){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

router.post("/createChatbotTicketStation", async(req,res) =>{
    try{
        const {
            name,
            contactNumber,
            district,
            stationName,
            description
        }=req.body;
        const newChatbotTicketStation=new ChatbotTicketStation({
            name,
            contactNumber,
            district,
            stationName,
            description
        });
        await newChatbotTicketStation.save();

        res.status(201).json({message:"Your ticket has been created"});

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/createChatbotTicketOfficer", async(req,res) =>{
    try{
        const {
            name,
            contactNumber,
            officerName,
            district,
            stationName,
            description
        }=req.body;
        const newChatbotTicketOfficer=new ChatbotTicketOfficer({
            name,
            contactNumber,
            officerName,
            district,
            stationName,
            description
        });
        await newChatbotTicketOfficer.save();

        res.status(201).json({message:"Your ticket has been created"});

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/createChatbotTicketOther", async(req,res) =>{
    try{
        const {
            name,
            contactNumber,
            topic,
            description
        }=req.body;
        const newChatbotTicketOther=new ChatbotTicketOther({
            name,
            contactNumber,
            topic,
            description
        });
        await newChatbotTicketOther.save();

        res.status(201).json({message:"Your ticket has been created"});

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/allChatbotFeedbacks", async (req, res) => {
    try {
        // Fetch all chatbot feedbacks from the database
        const allFeedbacks = await ChatbotFeedback.find();

        // Send the feedbacks as a response
        res.status(200).json({ chatbotFeedbacks: allFeedbacks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports=router;