import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/moviesListSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
    ]);
};