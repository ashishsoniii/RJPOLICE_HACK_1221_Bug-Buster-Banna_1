import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import axios from "axios";

function RaiseFir() {
    const [complainant, setComplainant] = useState({
        name: "",
        contactNumber: "",
        email: "",
        address: ""
    });
    const [incidentDetails, setIncidentDetails] = useState({
        location: "",
        description: "",
        category: ""
    });
    const [accused, setAccused] = useState({
        name: "",
        address: "",
        contactNumber: "",
        description: "",
    });

    const handleSubmit = async () => {
        try {
            const apiUrl = "https://raj-police-backend-test.onrender.com/api/efir/createEFIR";

            //constructing object to be sent
            const firData = {
                complainant,
                incidentDetails,
                accused,
            };

            // Make a POST request to submit the feedback
            const response = await axios.post(apiUrl, firData);

            // Check if the request was successful
            if (response.status === 201) {
                // Display success message
                alert("Form successfully submitted!");
            } else {
                // Display error message
                alert("Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Internal Server Error. Please try again later.");
        }
    };

    return (
        <div className="feedback-form homepage-main-areaa-form">
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { mb: 3, flexBasis: "48%" },
                    boxShadow: 3,
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    p: 4,
                    borderRadius: 3,
                    textAlign: "center",
                    maxWidth: 1050,
                    mx: "auto",
                }}
                noValidate
                autoComplete="off"
            >
                <div
                    style={{
                        "& .MuiTextField-root": { mb: 3, flexBasis: "48%" },
                        boxShadow: 3,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",

                        p: 4,
                        borderRadius: 3,
                        textAlign: "center",
                        maxWidth: 800,
                        mx: "auto",
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        placeholder="Enter your name"
                        value={complainant.name}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            name: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mobile"
                        placeholder="Enter your mobile"
                        value={complainant.contactNumber}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            contactNumber: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Enter your email"
                        value={complainant.email}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            email: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        placeholder="Enter your address"
                        value={complainant.address}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            address: e.target.value,
                        }))}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select incident category</FormLabel>
                        <RadioGroup
                            row
                            aria-label="incident category"
                            name="incident category"
                            value={incidentDetails.category}
                            onChange={(e) => setIncidentDetails((prevValue) => ({
                                ...prevValue,
                                category: e.target.value,
                            }))}
                        >
                            <FormControlLabel value="assault" control={<Radio />} label="Assault" />
                            <FormControlLabel value="theft" control={<Radio />} label="Theft" />
                            <FormControlLabel value="fraud" control={<Radio />} label="Fraud" />
                            <FormControlLabel value="cybercrime" control={<Radio />} label="Cybercrime" />
                            <FormControlLabel value="violence" control={<Radio />} label="Violence" />
                            <FormControlLabel value="missing" control={<Radio />} label="Missing" />
                            <FormControlLabel value="substance abuse" control={<Radio />} label="Substance Abuse" />

                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Incident Location"
                        placeholder="Enter Location of Incident"
                        value={incidentDetails.location}
                        onChange={(e) => setIncidentDetails((prevValue) => ({
                            ...prevValue,
                            location: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Incident Description"
                        placeholder="Describe the Incident"
                        value={incidentDetails.description}
                        onChange={(e) => setIncidentDetails((prevValue) => ({
                            ...prevValue,
                            description: e.target.value,
                        }))}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Accused Name"
                        placeholder="Name of accused"
                        value={accused.name}
                        onChange={(e) => setAccused((prevValue) => ({
                            ...prevValue,
                            name: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Accused Address"
                        placeholder="Address of accused"
                        value={accused.address}
                        onChange={(e) => setAccused((prevValue) => ({
                            ...prevValue,
                            address: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Accused Mobile"
                        placeholder="Mobile of accused"
                        value={accused.contactNumber}
                        onChange={(e) => setAccused((prevValue) => ({
                            ...prevValue,
                            contactNumber: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Accused Description"
                        placeholder="Description of accused"
                        value={accused.description}
                        onChange={(e) => setAccused((prevValue) => ({
                            ...prevValue,
                            description: e.target.value,
                        }))}
                    />

                </div>
                {/* Submit button */}
                <div>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default RaiseFir