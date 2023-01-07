import { Grid } from '@mui/material';
import React from 'react';
import VideoCard from '../components/VideoCard';
import { videoDictionary } from '../constants/videoDictionary';

const formattedVideos = Object.entries(videoDictionary).map(([key, value]) => {
  return (
    <Grid item={true} xs={12} sm={6} md={4}>
      <VideoCard src={value} title={key} />
    </Grid>
  );
});

export const Videos = () => {
  return (
    <Grid container spacing={8}>
      {formattedVideos}
      {/* <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/L0k-bUGvIJA"
          title="crispySkinHoneySalmon"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/S_tK05O12jg"
          title="cherryBalsamicReduction"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/wA1TiAcwaQE"
          title="crema"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/SfGzLmYaW0w"
          title="polpetteDiPane"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/l24-SgIrrJo"
          title="fritattaDiPatate"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/tzAwuqyMZXs"
          title="aracini"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/xFSW8jM-M0Y"
          title="pastaBolognese"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard
          src="https://www.youtube.com/embed/Fjv7dmO86Pg"
          title="EggplantRisotto"
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <VideoCard />
      </Grid> */}
    </Grid>
  );
};
