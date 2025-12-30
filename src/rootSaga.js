import { all } from "redux-saga/effects";
import { movieSaga } from "./features/movies/movieSaga";

import { movieListSaga } from "./features/movies/moviesListSaga";
import { peopleListSaga } from "./features/people/peopleListSaga";
import { searchPersonSaga } from "./features/people/personSearchSaga";
import { searchMovieSaga } from "./features/movies/movieSearchSaga";
import personSaga from "./features/people/PersonPage/personSaga";

export default function* rootSaga() {
  yield all([
    movieListSaga(),
    peopleListSaga(),
    searchPersonSaga(),
    searchMovieSaga(),
    personSaga(),
    movieSaga(),
  ]);
}
