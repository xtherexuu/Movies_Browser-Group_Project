import { debounce, put, select } from "redux-saga/effects";
import {
  selectSearchInputValue,
  setSearchInputValue,
} from "./searchInputSlice";
import { setPage, setSearch } from "../queriesSlice";
import {
  selectCategory,
  selectIsDetail,
  setRedirectTo,
} from "../../routing/routeSlice";
import getNewSearchParams from "../../../getNewSearchParams";

function* inputChangeHandler() {
  const inputValue = yield select(selectSearchInputValue);
  const isDetail = yield select(selectIsDetail);
  if (isDetail && inputValue) {
    const category = yield select(selectCategory);
    yield put(
      setRedirectTo(
        `/${category}?page=1&${getNewSearchParams("", ["s", inputValue])}`
      )
    );
  } else {
    yield put(setSearch(inputValue));
    yield put(setPage("1"));
  }
}

export default function* watchInputChange() {
  yield debounce(600, setSearchInputValue.type, inputChangeHandler);
}
