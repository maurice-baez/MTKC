import { Grid } from "@mui/material";
import React from "react";
import VideoCard from "../components/VideoCard";
import { VideoTest } from "../components/VideoTest";
import recipes from "../misc/recipes";

export const Videos = () => {
  return (
    <>
      <Grid container>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.eggplantRisotto.src}
            title={recipes.eggplantRisotto.title}
            desc={recipes.eggplantRisotto.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.potatoFritatta.src}
            title={recipes.potatoFritatta.title}
            desc={recipes.potatoFritatta.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.pastaBolognese.src}
            title={recipes.pastaBolognese.title}
            desc={recipes.pastaBolognese.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.crispySkinChicken.src}
            title={recipes.crispySkinChicken.title}
            desc={recipes.crispySkinChicken.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.eggplantPuree.src}
            title={recipes.eggplantPuree.title}
            desc={recipes.eggplantPuree.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
          {/* <VideoCard
            src={recipes.beefStroganoff.src}
            title={recipes.beefStroganoff.title}
            desc={recipes.beefStroganoff.desc}
          /> */}
        </Grid>
        <Grid xs={3}>
          <VideoTest />
        </Grid>
      </Grid>
    </>
  );
};
