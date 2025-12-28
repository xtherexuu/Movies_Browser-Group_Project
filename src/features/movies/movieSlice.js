import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState:
  {
    movieData: null,
    status: null,

  },

  reducers: {
    fetchMovieById: (_, {payload: id}) => ({
      status: "loading",
      movieData: null,
      id
    }),
    fetchMovieByIdSuccess: (_, { payload: movieData }) => ({
      status: "success",
      movieData,
    }),
    fetchMovieByIdError: () => ({
      status: "error",
      movieData: null,
    }),
  },
});

export const {
  fetchMovieById,
  fetchMovieByIdSuccess,
  fetchMovieByIdError
} = movieSlice.actions;

export const selectMovie = (state) => state.movie;
export const selectMovieStatus = (state) => selectMovie(state).status
export const selectMovieInfo = (state) => selectMovie(state).movieData;

export default movieSlice.reducer;