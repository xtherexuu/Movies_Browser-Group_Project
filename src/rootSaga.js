import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/MovieList/movieListSaga';
import { movieSaga } from './features/movies/movieSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        movieSaga(),
    ]);
};