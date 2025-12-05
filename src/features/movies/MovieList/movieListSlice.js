import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    moviesDate: null,
    status: "initial",
  },
  reducers: {
    fetchMovies: () => ({
      status: "loading",
      moviesDate: null,
    }),
    fetchMoviesSuccess: (_, { payload: moviesDate }) => ({
      status: "success",
      moviesDate,
    }),
    fetchMoviesError: () => ({
      status: "error",
      moviesDate: null,
    }),
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} = movieListSlice.actions;

const selectMovieListState = state => state.movieList;

export const selectMovies = state => selectMovieListState(state).moviesDate;
export const selectMoviesStatus = state => selectMovieListState(state).status;

export default movieListSlice.reducer;