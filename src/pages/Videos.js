import { Grid } from '@mui/material';
import React from 'react';
import VideoCard from '../components/VideoCard';
import { videoDictionary } from '../constants/videoDictionary';
import { StyledGrid } from './styledComponents';

const formattedVideos = Object.entries(videoDictionary).map(([key, value]) => {
  return (
    <Grid item={true} xs={12} sm={6} md={4}>
      <VideoCard src={value} title={key} />
    </Grid>
  );
});

export const Videos = () => {
  return (
    <StyledGrid container spacing={8}>
      {formattedVideos}
    </StyledGrid>
  );
};
