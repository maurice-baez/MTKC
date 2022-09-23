import { Typography } from "@mui/material";
import React from "react";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ ml: 1, mb: 1 }}>
        Contact MTKC
      </Typography>
      <ContactForm />
    </div>
  );
};
