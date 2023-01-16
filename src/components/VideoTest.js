import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export const VideoTest = () => (
  <Card sx={{ margin: '20px' }}>
    <CardActionArea href={'/recipes/knots'}>
      <CardMedia
        alt="garlic knots"
        component="video"
        controls
        src="https://youtube.com/shorts/L0k-bUGvIJA?feature=share"
      />
      <CardContent>
        <Typography gutterBottom variant="body1">
          Garlic Knots
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
