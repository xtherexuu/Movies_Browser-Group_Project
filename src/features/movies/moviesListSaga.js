import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesListSlice";
import { getPopularMovies } from "../getData";

function* fetchMoviesHandler({ payload }) {
  try {
    const MoviesDate = yield call(getPopularMovies, payload);
    yield put(fetchMoviesSuccess(MoviesDate));
  } catch (error) {
    yield put(fetchMoviesError());
    yield call(
      alert,
      "Download failed, please try again or check your internet connection"
    );
  }
}

export function* movieListSaga() {
  yield takeLatest(fetchMovies, fetchMoviesHandler);
}
