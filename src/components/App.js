import React, { Fragment } from 'react';
import Nav from './Nav';
import { Container, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../theme';
import { RoutesList } from '../routes/RoutesList';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Nav />
          <Container sx={{ marginTop: '4rem' }}>
            <RoutesList />
          </Container>
        </StyledThemeProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
