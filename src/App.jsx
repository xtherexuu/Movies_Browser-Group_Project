import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Normalize } from "styled-normalize";
import { MovieListPage } from "./features/movies/MovieList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <MovieListPage />
    </ThemeProvider>
  );
}

export default App;
