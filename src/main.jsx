import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import App from "./App.jsx";
import PageLayout from "./common/PageLayout/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <HashRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/people" element={<div>PeopleTest</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
