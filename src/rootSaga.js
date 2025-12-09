import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/MovieList/movieListSaga';
import { peopleListSaga } from './features/people/peopleListSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        peopleListSaga(),
    ]);
};