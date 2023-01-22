import { Grid } from '@mui/material';
import React, { Fragment } from 'react';
import VideoCard from '../components/VideoCard';
import { videoDictionary } from '../constants/videoDictionary';
import { StyledGrid } from './styledComponents';

const formattedVideos = videoDictionary.map((video) => (
  <Grid
    item={true}
    key={video.name}
    md={4}
    sm={6}
    xs={12}
  >
    <VideoCard
      needsMarginTop={true}
      src={video.src}
      title={video.name}
    />
  </Grid>
),
);

export const Videos = () => (
  <Fragment>
    <StyledGrid container spacing={8}>
      {formattedVideos}
    </StyledGrid>
  </Fragment>
);