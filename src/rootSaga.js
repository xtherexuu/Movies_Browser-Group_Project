import { all } from "redux-saga/effects";
import { movieListSaga } from "./features/movies/MovieList/movieListSaga";
import searchInputSaga from "./features/queries/SearchInput/searchInputSaga";

export default function* rootSaga() {
  yield all([movieListSaga(), searchInputSaga()]);
}
