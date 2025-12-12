// import { createSlice } from "@reduxjs/toolkit";

// const routeSlice = createSlice({
//   name: "route",
//   initialState: {
//     section: null, // "movies" | "people" | null
//     path: null, // pełny pathname
//     redirectTo: null, // "/movies" | "/people" | null
//   },
//   reducers: {
//     setSection: (state, { payload }) => {
//       state.section = payload;
//     },
//     setPath: (state, { payload }) => {
//       state.path = payload;
//     },
//     requestListRedirect: (state, { payload }) => {
//       state.redirectTo = payload; // "/movies" albo "/people"
//     },
//     clearRedirect: (state) => {
//       state.redirectTo = null;
//     },
//   },
// });

// export const { setSection, setPath, requestListRedirect, clearRedirect } =
//   routeSlice.actions;

// export const selectSection = (state) => state.route.section;
// export const selectPath = (state) => state.route.path;
// export const selectRedirectTo = (state) => state.route.redirectTo;

// export default routeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "movies",
  path: "/",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setCategory: (prevState, { payload: category }) => ({
      ...prevState,
      category,
    }),
    setPath: (prevState, { payload: path }) => ({
      ...prevState,
      path,
    }),
  },
});

export const { setCategory, setPath } = routeSlice.actions;

const routeState = (state) => state.route;
export const selectCategory = (state) => routeState(state).category;
export const selectPath = (state) => routeState(state).path;

export default routeSlice.reducer;
