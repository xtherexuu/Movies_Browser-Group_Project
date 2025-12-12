import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getCrewByID, getMovieByID } from "../getData";
import { fetchMovieById, fetchMovieByIdError, fetchMovieByIdSuccess } from "./movieSlice";

function* fetchMovieByIDHandler({ payload }) {
  try {
    const movieDescription = yield call(getMovieByID, payload);
    if (movieDescription.success === false && movieDescription.status_code === 404) {
      yield put(fetchMovieByIdError("Movie not found"));
      return;
    }
    const movieCrew = yield call(getCrewByID, payload);
    const movieData = {
      movieDescription: movieDescription,
      movieCrew: movieCrew
    };
    yield delay(300);
    yield put(fetchMovieByIdSuccess(movieData));
  }
  catch (error) {
    yield put(fetchMovieByIdError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  };
};

export function* movieSaga() {
  yield takeLatest(fetchMovieById, fetchMovieByIDHandler);
};