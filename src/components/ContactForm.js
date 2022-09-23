import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        width: 500,
        maxWidth: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="first name"
          placeholder="first name"
        />
        <TextField
          required
          id="outlined-required"
          label="last name"
          placeholder="last name"
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="email"
          placeholder="email address"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="message"
          multiline
          fullWidth
          rows={10}
          placeholder="Write your message here"
        />
      </div>
      <Button variant="contained" sx={{ ml: 1 }}>
        Submit
      </Button>
    </Box>
  );
};
