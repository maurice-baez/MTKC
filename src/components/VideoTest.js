import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export const VideoTest = () => {
  return (
    <Card sx={{ margin: '20px' }}>
      <CardActionArea href={`/recipes/knots`}>
        <CardMedia
          controls
          component="video"
          src="https://youtube.com/shorts/L0k-bUGvIJA?feature=share"
          alt="garlic knots"
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            Garlic Knots
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
