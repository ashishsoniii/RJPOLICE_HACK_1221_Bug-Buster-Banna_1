import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import axios from "axios";

import Select from "@mui/material/Select";

export default function PollAdd() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/poll", {
        question: question,
        options: options,
      });

      alert("Poll Added Successfully - Please Refresh");
      // Handle successful response (e.g., display a success message, redirect)

      setOpen(false);
    } catch (error) {
      alert("Error:", error);
      // Handle error (e.g., display an error message)
    }
  };
  const [age, setAge] = React.useState("");

  const [options, setOptions] = React.useState([]);
  const [question, setQuestion] = useState("");

  const handleTextFieldChange = (i, event) => {
    setOptions((prevOptions) => [
      ...prevOptions.slice(0, i),
      event.target.value,
      ...prevOptions.slice(i + 1),
    ]);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const renderTextFields = () => {
    const fields = [];
    for (let i = 0; i < age; i++) {
      fields.push(
        <TextField
          key={i}
          fullWidth
          id={`standard-basic-${i}`}
          label={`Enter Option ${i + 1}`}
          variant="standard"
          onChange={(event) => handleTextFieldChange(i, event)} // Add onChange handler
        />
      );
    }
    return fields;
  };
  return (
    <div
      className="Add-poll-btn"
      style={{
        justifyContent: "flex-end",
        display: "flex",
        marginRight: "2rem",
      }}
    >
      <Button
        variant="outlined"
        style={{ color: "green" }}
        onClick={handleClickOpen}
      >
        Add New Poll
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add a Poll"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="question-input" // Give it a unique ID
              label="Enter Question"
              variant="standard"
              value={question} // Bind the state value to the field
              onChange={(event) => setQuestion(event.target.value)} // Update state on change
            />
          </Box>

          <FormControl sx={{ m: 2, minWidth: 130 }}>
            <InputLabel htmlFor="demo-dialog-native">No of Options</InputLabel>
            <Select
              native
              value={age}
              onChange={handleChange}
              input={<OutlinedInput label="Age" id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </FormControl>

          {renderTextFields()}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Discard
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
