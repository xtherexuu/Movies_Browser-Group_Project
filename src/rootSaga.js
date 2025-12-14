import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/moviesListSaga';
import { searchSaga } from './features/movies/movieSearchSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        searchSaga(),
    ]);
};