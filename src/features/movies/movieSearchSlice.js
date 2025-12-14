import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState:
  {
    searchData: null,
    status: "initial",
    page: 1,
  },

  reducers: {
    fetchSearchMovie: (_, { payload: { page, query } }) => ({
      status: "loading",
      searchData: null,
      query,
      page
    }),
    fetchSearchMovieSuccess: (_, { payload: searchData }) => ({
      status: "success",
      searchData,
    }),
    fetchSearchMovieError: () => ({
      status: "error",
      searchData: null,
    }),
    fetchOpen: (state, { payload: open }) => {
      state.open = open;
    },
  },
});

export const {
  fetchSearchMovie,
  fetchSearchMovieSuccess,
  fetchSearchMovieError,
} = searchMovieSlice.actions;

export const selectState = state => state.searchMovie;
export const selectMovie = state => selectState(state).searchData;
export const selectSearchMovieStatus = state => selectState(state).status;

export default searchMovieSlice.reducer;