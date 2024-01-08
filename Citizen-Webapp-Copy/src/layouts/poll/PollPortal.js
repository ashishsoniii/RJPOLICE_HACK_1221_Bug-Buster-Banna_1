import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";

function PollPortal() {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      heading: "Accordion 1: Choose an option",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: 2,
      heading: "Accordion 2: Choose an option",
      options: ["Option 4", "Option 5", "Option 6"],
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (accordionId, option) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [accordionId]: option,
    }));
  };

  useEffect(() => {
    // You can fetch additional accordion data from the API here and update the state
    // Example:
    // fetchAccordionDataFromApi().then((apiData) => setAccordionData(apiData));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Box sx={{ margin: "0rem 2rem 0rem 2rem" }}>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={accordion.id}
          sx={{
            borderRadius: "30px 30px 30px 30px !important",
            border: "1.5px solid black",
            margin: "1rem",
            padding: "1.5rem",
            backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${accordion.id}-content`}
            id={`panel-${accordion.id}-header`}
            sx={
              {
                //   borderRadius: "30px", // Adjust the border-radius as needed
                //   border: "1.5px solid black",
              }
            }
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {accordion.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={`options-${accordion.id}`}
                name={`options-${accordion.id}`}
                value={selectedOptions[accordion.id] || ""}
                onChange={(e) =>
                  handleOptionChange(accordion.id, e.target.value)
                }
              >
                {accordion.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default PollPortal;
