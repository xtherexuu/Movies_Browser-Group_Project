import { call, put, takeLatest } from "redux-saga/effects";
import { getSearchMovie } from "../getData";
import {
  fetchSearchMovie,
  fetchSearchMovieError,
  fetchSearchMovieSuccess,
} from "./movieSearchSlice";

function* fetchSearchMovieHandler(action) {
  const { query, page } = action.payload;
  if (query === null || page === null) return;
  else {
    try {
      const searchMovie = yield call(getSearchMovie, query, page);
      yield put(fetchSearchMovieSuccess(searchMovie));
    } catch (error) {
      yield put(fetchSearchMovieError());
      yield call(
        alert,
        "Download failed, please try again or check your internet connection"
      );
    }
  }
}

export function* searchMovieSaga() {
  yield takeLatest(fetchSearchMovie, fetchSearchMovieHandler);
}
