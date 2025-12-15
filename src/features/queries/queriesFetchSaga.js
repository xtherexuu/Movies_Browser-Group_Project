import { debounce, select } from "redux-saga/effects";
import { selectPage, selectSearch, setPage, setSearch } from "./queriesSlice";
import {
  selectCategory,
  selectIsDetail,
  setCategory,
  setIsDetail,
} from "../routing/routeSlice";

function* triggerFetching() {
  const isDetail = yield select(selectIsDetail);
  if (isDetail) return;
  const category = yield select(selectCategory);
  if (category === "movies") {
    const search = yield select(selectSearch);
    const page = yield select(selectPage);
    // ...
    // This is the place where the action responsible for fetching data should be called.
  } else if (category === "people") {
    const search = yield select(selectSearch);
    const page = yield select(selectPage);
    // ...
    // This is the place where the action responsible for fetching data should be called.
  }
}

export default function* queriesFetchSaga() {
  yield debounce(
    0,
    [setSearch.type, setPage.type, setCategory.type, setIsDetail.type],
    triggerFetching
  );
}
