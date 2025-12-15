import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "/",
  category: "movies", // "movies" | "people"
  isDetail: false,
  redirectTo: null,
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
    setIsDetail: (prevState, { payload: isDetail }) => ({
      ...prevState,
      isDetail,
    }),
    setRedirectTo: (prevState, { payload: redirectTo }) => ({
      ...prevState,
      redirectTo,
    }),
    clearRedirect: (prevState) => ({
      ...prevState,
      redirectTo: "",
    }),
  },
});

export const {
  setCategory,
  setPath,
  setIsDetail,
  setRedirectTo,
  clearRedirect,
} = routeSlice.actions;

const routeState = (state) => state.route;
export const selectCategory = (state) => routeState(state).category;
export const selectPath = (state) => routeState(state).path;
export const selectIsDetail = (state) => routeState(state).isDetail;
export const selectRedirectTo = (state) => routeState(state).redirectTo;

export default routeSlice.reducer;
