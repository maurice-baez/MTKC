import { Box, Typography } from "@mui/material";
import React from "react";
import { BioCard } from "../components/BioCard";

export const About = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Meet the chef
      </Typography>
      <BioCard />
    </>
  );
};
