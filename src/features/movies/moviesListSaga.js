import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchMovies, fetchMoviesSuccess, fetchMoviesError } from "./moviesListSlice";
import { getPopularMovies } from "../getData";

const loadingDelay = 2_000;

function* fetchMoviesHandler({ payload }) {
    try {
        yield delay(loadingDelay); //just to demo the loading
        const MoviesDate = yield call(getPopularMovies, payload);
        yield put(fetchMoviesSuccess(MoviesDate));
    } catch (error) {
        yield put(fetchMoviesError());
        yield call(alert, "Download failed, please try again or check your internet connection");
    }
}

export function* movieListSaga() {
    yield takeLatest(fetchMovies, fetchMoviesHandler);
}