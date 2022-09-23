import Nav from "./Nav";
import { Container, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { RoutesList } from "../routes/RoutesList";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Container sx={{ marginTop: "40px" }}>
          <RoutesList />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
