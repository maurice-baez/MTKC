import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export const BioCard = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <Avatar
          src="./ang.jpg"
          alt="Angelina"
          sx={{ width: 500, height: 500 }}
        />
      </Grid>
      <Grid
        xs={6}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Typography variant="h2" gutterBottom>
          Hi, I'm Angelina.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I like to make good food and fun videos. More on me to come!
        </Typography>
      </Grid>
    </Grid>
  );
};
