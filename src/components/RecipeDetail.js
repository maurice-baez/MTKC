import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
  const { id } = useParams();

  console.log("id=", id);
  return (
    <>
      <Grid container>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345, margin: "15px" }}>
            <CardMedia
              component="video"
              controls
              src="/knots.MP4"
              alt="garlic knots"
            />
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345, margin: "15px" }}>
            <CardContent>
              <Typography>Garlic knot recipe will go here</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
