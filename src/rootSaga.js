import { all } from 'redux-saga/effects';
import { movieListSaga } from './features/movies/moviesListSaga';
import { movieSaga } from './features/movies/movieSaga';
import { peopleListSaga } from './features/people/peopleListSaga';
import { searchPersonSaga } from './features/people/personSearchSaga';
import { searchMovieSaga } from './features/movies/movieSearchSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        movieSaga(),
        peopleListSaga(),
        searchPersonSaga(),
        searchMovieSaga(),
    ]);
};