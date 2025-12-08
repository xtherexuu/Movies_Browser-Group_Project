import { debounce, put, select } from "redux-saga/effects";
import { selectSearchInputValue, setSearch } from "../queriesSlice";

function* searchMovieHandler() {
  const searchInputValue = yield select(selectSearchInputValue);
  yield put(setSearch(searchInputValue));
}

export default function* watchInputChange() {
  yield debounce(600, "queries/setSearchInputValue", searchMovieHandler);
}
