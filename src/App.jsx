import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Normalize } from "styled-normalize";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
    </ThemeProvider>
  );
}

export default App;
