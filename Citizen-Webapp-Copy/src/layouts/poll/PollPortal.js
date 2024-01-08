// import React, { useState, useEffect } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FormControl from "@mui/material/FormControl";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// function PollPortal() {
//   const [accordionData, setAccordionData] = useState([
//     {
//       id: 1,
//       heading: "Accordion 1: Choose an option",
//       options: ["Option 1", "Option 2", "Option 3"],
//     },
//     {
//       id: 2,
//       heading: "Accordion 2: Choose an option",
//       options: ["Option 4", "Option 5", "Option 6"],
//     },
//   ]);

//   const [selectedOptions, setSelectedOptions] = useState({});

//   const handleOptionChange = (accordionId, option) => {
//     setSelectedOptions((prevSelected) => ({
//       ...prevSelected,
//       [accordionId]: option,
//     }));
//   };

//   const handleButtonClick = (accordionId) => {
//     const selectedOption = selectedOptions[accordionId];
//     console.log(
//       `Accordion ID: ${accordionId}, Selected Option: ${selectedOption}`
//     );
//     // You can perform additional actions here based on the button click
//   };

//   useEffect(() => {
//     // You can fetch additional accordion data from the API here and update the state
//     // Example:
//     // fetchAccordionDataFromApi().then((apiData) => setAccordionData(apiData));
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <Box sx={{ margin: "0rem 2rem 0rem 2rem" }}>
//       {accordionData.map((accordion, index) => (
//         <Accordion
//           key={accordion.id}
//           sx={{
//             borderRadius: "30px 30px 30px 30px !important",
//             border: "1.5px solid black",
//             margin: "1rem",
//             padding: "1.5rem",
//             backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
//           }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel-${accordion.id}-content`}
//             id={`panel-${accordion.id}-header`}
//             sx={
//               {
//                 //   borderRadius: "30px", // Adjust the border-radius as needed
//                 //   border: "1.5px solid black",
//               }
//             }
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: {
//                   xs: "1rem",
//                   sm: "1rem",
//                   md: "1.2rem",
//                   lg: "1.4rem",
//                   xl: "2rem",
//                 },
//               }}
//             >
//               {accordion.heading}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <FormControl component="fieldset">
//               <RadioGroup
//                 aria-label={`options-${accordion.id}`}
//                 name={`options-${accordion.id}`}
//                 value={selectedOptions[accordion.id] || ""}
//                 onChange={(e) =>
//                   handleOptionChange(accordion.id, e.target.value)
//                 }
//               >
//                 {accordion.options.map((option) => (
//                   <FormControlLabel
//                     key={option}
//                     value={option}
//                     control={<Radio />}
//                     label={option}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>
//           </AccordionDetails>
//           <Button
//             variant="contained"
//             color="success"
//             onClick={() => handleButtonClick(accordion.id)}
//           >
//             Submit Answer
//           </Button>
//         </Accordion>
//       ))}
//     </Box>
//   );
// }

// export default PollPortal;

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
import Button from "@mui/material/Button";
import axios from "axios";

function PollPortal() {
  const [accordionData, setAccordionData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (accordionId, option) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [accordionId]: option,
    }));
  };

  const handleButtonClick = async (accordionId) => {
    const selectedOption = selectedOptions[accordionId];
    console.log(
      `Accordion ID: ${accordionId}, Selected Option: ${selectedOption}`
    );

    console.log(accordionId);

    // Make an HTTP POST request to submit the answer
    try {
      await axios.post(`http://localhost:5000/api/poll/${accordionId}/submit`, {
        answer: selectedOption,
      });

      // You can add additional logic here after successfully submitting the answer
      alert("Answer submitted successfully");
    } catch (error) {
      console.error("Error submitting answer:", error.message);
      // Handle error accordingly
    }
  };

  useEffect(() => {
    // Fetch all polls when the component mounts
    const fetchPolls = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/poll");
        setAccordionData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching polls:", error.message);
        // Handle error accordingly
      }
    };

    fetchPolls();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Box sx={{ margin: "0rem 2rem 0rem 2rem" }}>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={accordion._id}
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
            aria-controls={`panel-${accordion._id}-content`}
            id={`panel-${accordion._id}-header`}
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
              {accordion.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={`options-${accordion._id}`}
                name={`options-${accordion._id}`}
                value={selectedOptions[accordion._id] || ""}
                onChange={(e) =>
                  handleOptionChange(accordion._id, e.target.value)
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
          <Button
            variant="contained"
            color="success"
            onClick={() => handleButtonClick(accordion._id)}
          >
            Submit Answer
          </Button>
        </Accordion>
      ))}
    </Box>
  );
}

export default PollPortal;
