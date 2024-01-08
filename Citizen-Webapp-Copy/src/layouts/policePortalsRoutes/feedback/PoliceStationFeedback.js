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

// it will add data to stationFeedback

function PoliceStationFeedback() {
    const [complainant, setComplainant] = useState({
        name: "",
        mobile: "",
        address: "",
        city: "",
        pinCode: "",
        email: ""
    });
    const [accused, setAccuse] = useState({
        isPoliceOfficer: false,
        officerName: "",
        policeDistrict: "",
        policeStation: ""
    });
    const [complaintDetails, setComplaintDetails] = useState({
        description: ""
    });

    const handleSubmit = async () => {
        try {
            const apiUrl = "http://localhost:5000/api/feedback/fillStationFeedback";

            //constructing object to be sent
            const feedbackData = {
                complainant,
                accused,
                complaintDetails,
            };

            // Make a POST request to submit the feedback
            const response = await axios.post(apiUrl, feedbackData);

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
    }
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
                        value={complainant.mobile}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            mobile: e.target.value,
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
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        placeholder="Enter your city"
                        value={complainant.city}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            city: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Pin Code"
                        placeholder="Enter your Pin Code"
                        value={complainant.pinCode}
                        onChange={(e) => setComplainant((prevValue) => ({
                            ...prevValue,
                            pinCode: e.target.value,
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
                    {/* Showing the officerName only when the isPoliceOfficer is selected */}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Is a police officer involved?</FormLabel>
                        <RadioGroup
                            row
                            aria-label="isPoliceOfficer"
                            name="isPoliceOfficer"
                            value={accused.isPoliceOfficer}
                            onChange={(e) => setAccuse((prevValue) => ({
                                ...prevValue,
                                isPoliceOfficer: e.target.value,
                            }))}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>

                        {accused.isPoliceOfficer === 'yes' && (
                            <TextField
                                id="officerName"
                                label="Officer Name"
                                value={accused.officerName}
                                onChange={(e) => setAccuse((prevValue) => ({
                                    ...prevValue,
                                    officerName: e.target.value,
                                }))}
                                fullWidth
                                margin="normal"
                            />
                        )}
                    </FormControl>
                    {/* asking officerName on yes ends here*/}
                    <TextField
                        required
                        id="outlined-required"
                        label="Police District"
                        placeholder="Enter police district"
                        value={accused.policeDistrict}
                        onChange={(e) => setAccuse((prevValue) => ({
                            ...prevValue,
                            policeDistrict: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Police Station"
                        placeholder="Enter police station"
                        value={accused.policeStation}
                        onChange={(e) => setAccuse((prevValue) => ({
                            ...prevValue,
                            policeStation: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        placeholder="Enter Description"
                        value={complaintDetails.description}
                        onChange={(e) => setComplaintDetails((prevValue) => ({
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

export default PoliceStationFeedback