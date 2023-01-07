import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { HeaderSection } from './HeaderSection';
import { PhotoSection } from './PhotoSection';
import { HeaderContainer, StyledTextContainer } from './styledComponents';
import { TextSection } from './TextSection';

export const About = () => {
  return (
    <Fragment>
      <HeaderContainer item={true} xs={5}>
        <HeaderSection />
      </HeaderContainer>
      <Grid container>
        <Grid item={true} xs={12} sm={5}>
          <PhotoSection />
        </Grid>
        <StyledTextContainer item={true} xs={12} sm={7}>
          <TextSection />
        </StyledTextContainer>
      </Grid>
    </Fragment>
  );
};
