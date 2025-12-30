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
import { PeopleListPage } from "./features/people/PeopleList/index.jsx";
import { MoviePage } from "./features/movies/MoviePage/index.jsx";
import { MovieListPage } from "./features/movies/MovieList/index.jsx";
import PersonPage from "./features/people/PersonPage/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <HashRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<MovieListPage />} />
              <Route path="/movies" element={<MovieListPage />} />
              <Route path="/people" element={<PeopleListPage />} />
              <Route path="/people/:id" element={<PersonPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
