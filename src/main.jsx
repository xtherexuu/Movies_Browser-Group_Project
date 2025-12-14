import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import { HashRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import App from "./App.jsx";
import PageLayout from "./common/PageLayout/index.jsx";
import { PeopleListPage } from "./features/people/PeopleList/index.jsx";
import { PeopleDetails } from "./features/people/PeopleDetails/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <HashRouter>
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/people" element={<PeopleListPage />} />
              <Route path="/people/:id" element={<PeopleDetails/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);