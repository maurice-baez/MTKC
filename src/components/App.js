import Nav from './Nav';
import { Container, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../theme';
import { RoutesList } from '../routes/RoutesList';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Nav />
          <Container sx={{ marginTop: '40px' }}>
            <RoutesList />
          </Container>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
