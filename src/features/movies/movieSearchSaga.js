import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getSearchMovie } from "../getData";
import { fetchSearchMovie, fetchSearchMovieError, fetchSearchMovieSuccess } from "./movieSearchSlice";

function* fetchSearchMovieHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  else {
    try {
      const searchMovie = yield call(getSearchMovie, query, page);
      //yield delay(500);
      yield put(fetchSearchMovieSuccess(searchMovie));
    }
    catch (error) {
      yield put(fetchSearchMovieError());
      yield call(alert, "Download failed, please try again or check your internet connection")
    }
  }
};

export function* searchSaga() {
  yield takeLatest(fetchSearchMovie, fetchSearchMovieHandler);
}