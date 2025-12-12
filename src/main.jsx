import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import {
  createHashRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import App from "./App.jsx";
import { MovieListPage } from "./features/movies/MovieList/index.jsx";

const loader = ({ request }) => {
  const { searchParams, pathname } = new URL(request.url);
  if (searchParams.get("s") || searchParams.get("page")) {
    throw redirect(pathname);
  }
};

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<MovieListPage />} />
      <Route path="/movies" element={<MovieListPage />} />
      <Route
        path="/movies/:id"
        loader={loader}
        element={<div>test movies specific</div>}
      />
      <Route path="/people" element={<div>PeopleTest</div>} />
      <Route
        path="/people/:id"
        loader={loader}
        element={<div>test people specific</div>}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
  // {/* </StrictMode> */}
);
