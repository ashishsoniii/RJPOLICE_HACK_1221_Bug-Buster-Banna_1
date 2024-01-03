const express = require("express");
const Efir = require("../models/eFir");
const router = express.Router();

// routes/firRoutes.js
router.post("/createEFIR", async (req, res) => {
    try {
        // Fetch the latest firNumber from the database
        const latestEFIR = await Efir.findOne({}, {}, { sort: { 'firNumber': -1 } });

        // Calculate the new firNumber
        const newFirNumber = latestEFIR ? latestEFIR.firNumber + 1 : 1;

        const {
            complainant,
            incidentDetails,
            accused,
            status,  // Include 'status' in the request body
            resolutionDetails,
        } = req.body;

        // Create a new EFIR document with the provided data
        const newEFIR = new Efir({
            firNumber:newFirNumber,
            complainant,
            incidentDetails,
            accused,
            status,
            resolutionDetails,
        });

        // Save the new EFIR document to the database
        await newEFIR.save();

        // Send a success response
        res.status(201).json({
            message: "E-FIR created successfully!",
            newFirNumber
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Display All Submitted Feedback
router.get("/allFir", async (req, res) => {
    try {
        const allFir = await Efir.find();

        // include only necessary information-> firNumber and status
        const simplifiedEFIRs = allFir.map((efir) => ({
            firNumber: efir.firNumber,
            status: efir.status,
        }));

        res.status(200).json(simplifiedEFIRs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;