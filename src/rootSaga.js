import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/MovieList/movieListSaga';
import { peopleDetailsSaga } from './features/people/peopleDetailsSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        peopleDetailsSaga(),
    ]);
};