import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/moviesListSaga';
import { searchMovieSaga } from './features/movies/movieSearchSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        searchMovieSaga(),
    ]);
};