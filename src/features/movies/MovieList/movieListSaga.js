import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchMovies, fetchMoviesSuccess, fetchMoviesError } from "./movieListSlice";
import { getPopularMovies } from "../../getData";

const loadingDelay = 2_000;

function* fetchMoviesHandler() {
    try {
        yield delay(loadingDelay); //just to demo the loading
        const MoviesDate = yield call(getPopularMovies);
        yield put(fetchMoviesSuccess(MoviesDate));
    } catch (error) {
        yield put(fetchMoviesError());
        yield call(alert, "Download failed, please try again or check your internet connection");
    }
}

export function* movieListSaga() {
    yield takeLatest(fetchMovies, fetchMoviesHandler);
}