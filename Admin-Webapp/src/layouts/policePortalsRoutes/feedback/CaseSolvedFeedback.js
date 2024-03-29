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

// it will add data to the model "postFirFeedback"

function CaseSolvedFeedback() {
    const [firNumber, setFirNumber] = useState("");
    //timestamp 
    //date 
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [email, setEmail] = useState("");
    const [policeDistrict, setPoliceDistrict] = useState("");
    const [policeStation, setPoliceStation] = useState("");
    const [details, setDetails] = useState("");
    const [timelyResolved, setTimelyResolved] = useState(true);
    const [satisfactionLevel, setSatisfactionLevel] = useState("3");
    const [comments, setComments] = useState("");
    const [externalFill, setExternalFill] = useState(false);
    //
    const [policeStationRating, setPoliceStationRating] = useState({
        higenic: "3",
        behavior: "3",
        easeOfProcess: "3",
        overall: "3",
    });
    // the fields that were extra in FeedbackForm1 are all used here
    const [responseTimeRating, setResponseTimeRating] = useState("3");
    const [problemResolutionRating, setProblemResolutionRating] = useState("3");
    const [accessibilityRating, setAccessibilityRating] = useState("3");
    const [followUpProcessRating, setFollowUpProcessRating] = useState("3");
    const [suggestionsImprovements, setSuggestionsImprovements] = useState("");
    const [safetyPerception, setSafetyPerception] = useState("3");

    const handleSubmit = async () => {
        try {
            // Your backend API endpoint for feedback submission
            const apiUrl = "https://raj-police-backend-test.onrender.com/api/feedback/fillPostFirFeedback";

            // Construct the feedback object to be sent
            const feedbackData = {
                firNumber,
                name,
                address,
                pinCode,
                city,
                email,
                policeDistrict,
                policeStation,
                details,
                timelyResolved,
                satisfactionLevel,
                externalFill,
                comments,
                policeStationRating,
                responseTimeRating,
                problemResolutionRating,
                accessibilityRating,
                followUpProcessRating,
                suggestionsImprovements,
                safetyPerception,
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
                {/* text fields  */}
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
                        label="FIR Number"
                        placeholder="Enter FIR Number"
                        value={firNumber}
                        onChange={(e) => setFirNumber(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        placeholder="Enter Your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Pin Code"
                        placeholder="Enter Your Pincode"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        placeholder="Enter Your City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Police District"
                        placeholder="Enter Police District"
                        value={policeDistrict}
                        onChange={(e) => setPoliceDistrict(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Police Station"
                        placeholder="Enter Police Station"
                        value={policeStation}
                        onChange={(e) => setPoliceStation(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="FIR details"
                        placeholder="Enter FIR detail in short"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Comments"
                        placeholder="Comments on authorities/FIR resolution"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />

                    <FormControl sx={{ mb: 4, flexBasis: "48%", textAlign: "left" }}>

                        <FormLabel component="legend" style={{ marginBottom: '0px' }}>{`Timely Resolved? ${timelyResolved ? "YES" : "NO"}`}</FormLabel>
                        <Select style={{
                            "& .MuiTextField-root": { marginTop: 3, flexBasis: "48%" },
                        }}
                            label="Timely Resolved"
                            value={timelyResolved}
                            onChange={(e) => { if (e.target.value === "Yes") { setTimelyResolved(true) } else { setTimelyResolved(false) } }}

                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </Select>

                    </FormControl>

                    {/* text fields */}

                    {/*  radio groups  */}
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "42ch", flexBasis: "48%" },
                            boxShadow: 3, // Adding a shadow for a bordered look
                            padding: 4, // Adding padding for better spacing
                            borderRadius: 3,
                            textAlign: "center", // Center-aligning text
                            margin: 2,
                            maxWidth: 1200,
                            flexBasis: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Satisfaction Level</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="Satisfaction Level"
                                    name="Satisfaction Level"
                                    value={satisfactionLevel}
                                    onChange={(e) => setSatisfactionLevel(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Response Time Rating</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="RT rating"
                                    name="Response Time Rating"
                                    value={responseTimeRating}
                                    onChange={(e) => setResponseTimeRating(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Problem Resolution Rating</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="PR rating"
                                    name="Problem Resolution Rating"
                                    value={problemResolutionRating}
                                    onChange={(e) => setProblemResolutionRating(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Accessibility Rating</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="Accessibility rating"
                                    name="Accessibility Rating"
                                    value={accessibilityRating}
                                    onChange={(e) => setAccessibilityRating(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Follow-up Process Rating</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="FUP rating"
                                    name="Follow-up Process Rating"
                                    value={followUpProcessRating}
                                    onChange={(e) => setFollowUpProcessRating(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Safety Perception</FormLabel>

                                <RadioGroup
                                    row
                                    aria-label="SP"
                                    name="Safety Perception"
                                    value={safetyPerception}
                                    onChange={(e) => setSafetyPerception(e.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                    </Box>

                    {/* Radio groups ends here */}

                    <TextField style={{ flexBasis: "100%" }}
                        required
                        id="outlined-required"
                        label="Suggestions/Improvements"
                        placeholder="Enter Suggestions/Improvements"
                        multiline
                        rows={4}
                        value={suggestionsImprovements}
                        onChange={(e) => setSuggestionsImprovements(e.target.value)}
                        sx={{ width: "100%" }}
                    />

                    <div style={{ flexBasis: "100%", marginTop: 2 }}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default CaseSolvedFeedback