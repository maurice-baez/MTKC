import { Grid } from '@mui/material';
import React from 'react';
import VideoCard from '../components/VideoCard';
import { videoDictionary } from '../constants/videoDictionary';
import { StyledGrid } from './styledComponents';

const formattedVideos = Object.entries(videoDictionary).map(([key, value]) => (
  <Grid
    item={true}
    key={key}
    md={4}
    sm={6}
    xs={12}
  >
    <VideoCard
      needsMarginTop={true}
      src={value}
      title={key}
    />
  </Grid>
),
);

export const Videos = () => (
  <StyledGrid container spacing={8}>
    {formattedVideos}
  </StyledGrid>
);