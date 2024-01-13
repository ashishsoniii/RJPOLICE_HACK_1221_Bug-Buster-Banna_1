import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import AccordionDetails from "@mui/material/AccordionDetails";

function TrackFir() {
  const [firData, setFirData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    // Fetch EFIR data when the component mounts
    const fetchFirData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/efir/allFir");
        const data = await response.json();
        setFirData(data);
      } catch (error) {
        console.error("Error fetching EFIR data:", error);
      }
    };

    fetchFirData();
  }, []);
  return (
    <div className="">
      <Container>
        <Typography variant="h1" sx={{ mb: 4 }}>
          EFIR List
        </Typography>
        {firData.map((efir, index) => (
          <Card
            key={efir.firNumber}
            variant="outlined"
            sx={{
              mb: 3,
              backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff", // alternate colors
            }}
          >
            <CardContent>
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
                    <RadioGroup
                      aria-label={`options-${efir.firNumber}`}
                      name={`options-${efir.firNumber}`}
                      value={selectedOptions[efir.firNumber] || ""}
                      // onChange={(e) =>
                      //   handleOptionChange(efir.firNumber, e.target.value)
                      // }
                    >
                      Status: {efir.status}
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default TrackFir;
