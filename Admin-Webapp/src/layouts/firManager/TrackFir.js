import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  MenuItem,
  InputLabel,
  Select,
  Box,
  Button,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import AccordionDetails from "@mui/material/AccordionDetails";

import axios from "axios";

function TrackFir() {
  const [firData, setFirData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const [selectedStatus, setSelectedStatus] = useState({});

  const handleStatusChange = async (firNumber, status) => {
    try {
      // Update the selected status in the local state
      setSelectedStatus((prevStatus) => ({
        ...prevStatus,
        [firNumber]: status,
      }));

      // Trigger a PUT request to update the status on the server using Axios
      const response = await axios.put(
        `http://localhost:5000/api/efir/updateStatus/${firNumber}`,
        {
          status,
        }
      );

      if (response.status === 200) {
        alert(`Status updated successfully for FIR ${firNumber}`);
      } else {
        alert(`Failed to update status for FIR ${firNumber}`);
      }
    } catch (error) {
      alert("Error updating status:", error);
    }
  };

  const StudentCard = ({ accused, name, className, email, rollNo }) => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {accused} - {name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Number: {className}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Description: {email}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Address: {rollNo}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const IncidentCard = ({ accused, category, date, description, location }) => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {accused}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Category: {category}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Date: {date}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Description: {description}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Location: {location}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {
    // Fetch EFIR data when the component mounts
    const fetchFirData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/efir/allFirAdmin"
        );
        const data = await response.json();
        setFirData(data);
        console.log(data);
        console.log(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching EFIR data:", error);
      }
    };

    fetchFirData();
  }, []);
  return (
    <div className="">
      <Container>
        <Typography variant="h3" sx={{ mb: 4 }}>
          EFIR List
        </Typography>
        {firData.map((efir, index) => (
          <Accordion
            key={efir.firNumber}
            sx={{
              borderRadius: "30px 30px 30px 30px !important",
              border: "1.5px solid black",
              margin: "1rem",
              padding: "1.5rem",
              backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${efir.firNumber}-content`}
              id={`panel-${efir.firNumber}-header`}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                    xl: "2rem",
                  },
                }}
              >
                FIR Number: {efir.firNumber}
              </Typography>
              <br />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "red",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.5rem",
                    md: "0.5rem",
                    lg: "0.7rem",
                    xl: "0.8rem",
                  },
                }}
              >
                Status: {efir.status}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <FormControl component="fieldset">
                {/* Status: {efir.status} */}

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <StudentCard
                      accused={"Accused"}
                      name={efir.accused.name}
                      className={efir.accused.contactNumber}
                      email={efir.accused.description}
                      rollNo={efir.accused.address}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <StudentCard
                      accused={"complainant"}
                      name={efir.complainant.name}
                      className={efir.complainant.contactNumber}
                      email={efir.complainant.email}
                      rollNo={efir.accused.address}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={10}>
                  <Grid item xs={10} my={1}>
                    <IncidentCard
                      accused={"Description"}
                      category={efir.incidentDetails.category}
                      date={efir.incidentDetails.date}
                      description={efir.incidentDetails.description}
                      location={efir.incidentDetails.location}
                    />
                  </Grid>
                </Grid>
                <RadioGroup
                  aria-label={`options-${efir.firNumber}`}
                  name={`options-${efir.firNumber}`}
                  value={selectedOptions[efir.firNumber] || ""}
                  // onChange={(e) =>
                  //   handleOptionChange(efir.firNumber, e.target.value)
                  // }
                ></RadioGroup>
              </FormControl>

              <InputLabel my={2} id={`status-label-${efir.firNumber}`}>
                Currect Status - {efir.status}
              </InputLabel>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                flex="1"
                justifyContent="center"
              >
                <InputLabel id={`status-label-${efir.firNumber}`}>
                  Update Status
                </InputLabel>
                <Select
                  sx={{
                    minWidth: "90px", // Adjust the width as needed
                    border: "1px solid #0000",
                    borderRadius: "6px",
                    padding: "8px",
                    backgroundColor: "#fff",
                    "&:focus": {
                      borderColor: "#4CAF50", // Adjust focus color as needed
                    },
                  }}
                  labelId={`status-label-${efir.firNumber}`}
                  id={`status-select-${efir.firNumber}`}
                  value={selectedStatus[efir.firNumber] || efir.status}
                  onChange={(e) =>
                    handleStatusChange(efir.firNumber, e.target.value)
                  }
                >
                  <MenuItem value="Registered">Registered</MenuItem>
                  <MenuItem value="Pending Review">Pending Review</MenuItem>
                  <MenuItem value="Under Investigation">
                    Under Investigation
                  </MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </Select>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default TrackFir;
