import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { HeaderSection } from './HeaderSection';
import { PhotoSection } from './PhotoSection';
import { LeftContainer, LeftSection, StyledTextContainer } from './styledComponents';
import { TextSection } from './TextSection';

export const About = () => (
  <Grid container>
    <Grid item={true} sm={5} xs={12}>
      <LeftContainer>
        <HeaderSection />
        <PhotoSection />
      </LeftContainer>
    </Grid>
    {/* make like a chat box */}
    <StyledTextContainer item={true} sm={7} xs={12}>
      <TextSection />
    </StyledTextContainer>
  </Grid>
);
