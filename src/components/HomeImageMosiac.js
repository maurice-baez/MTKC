import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { StyledImage, StyledMainImage } from './styledComponents';

export default function HomeImageMosiac() {
  return (
    <ImageList
      className="d-flex justify-content-center"
      sx={{ overflowX: 'hidden' }}
    >
      {/* <Box>
        <ImageListItem>
          <StyledImage
            alt="ravioli"
            src="./ravioli.jpg"
            style={{ marginBottom: '5px' }}
          />
        </ImageListItem>
        <ImageListItem>
          <StyledImage
            alt="chicken and carrots"
            src="./chicken.jpg"
          />
        </ImageListItem>
      </Box> */}
      <ImageListItem>
        <StyledMainImage
          alt="MTKC logo"
          src="./MTKClogo.png"
        />
      </ImageListItem>
      {/* <Box>
        <ImageListItem>
          <StyledImage
            alt="riceballs"
            src="./riceball.jpg"
            style={{ marginBottom: '5px' }}
          />
        </ImageListItem>
        <ImageListItem>
          <StyledImage
            alt="garlic knots"
            src="./knots.jpg"
          />
        </ImageListItem>
      </Box> */}
    </ImageList>
  );
}