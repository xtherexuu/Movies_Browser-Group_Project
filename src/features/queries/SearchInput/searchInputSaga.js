// import { debounce, put, select } from "redux-saga/effects";
// import { selectSearchInputValue, setPage, setSearch } from "../queriesSlice";
// import {
//   selectPath,
//   selectSection,
//   requestListRedirect,
// } from "../../routing/routeSlice";
// function* searchInputHandler() {
//   const searchInputValue = yield select(selectSearchInputValue);
//   const trimmed = searchInputValue.trim();

//   // ustawiamy zapytanie i resetujemy stronę
//   yield put(setSearch(searchInputValue));
//   yield put(setPage("1"));

//   // jeśli input jest pusty, nie robimy redirectu
//   if (!trimmed) {
//     return;
//   }

//   const path = yield select(selectPath);
//   const section = yield select(selectSection);

//   let target = "/movies";
//   if (path?.startsWith("/people") || section === "people") {
//     target = "/people";
//   }

//   const isOnList = path === "/movies" || path === "/" || path === "/people";

//   if (!isOnList) {
//     yield put(requestListRedirect(target));
//   }

//   // brak bezpośredniego fetch – jeden strzał zrobi queriesFetchSaga po zebraniu setSearch/setPage
// }

// export default function* watchInputChange() {
//   yield debounce(600, "queries/setSearchInputValue", searchInputHandler);
// }

import { debounce, put, select } from "redux-saga/effects";
import {
  selectSearchInputValue,
  setSearchInputValue,
} from "./searchInputSlice";
import { setPage, setSearch } from "../queriesSlice";

function* inputChangeHandler() {
  const inputValue = yield select(selectSearchInputValue);
  yield put(setSearch(inputValue));
  yield put(setPage("1"));
}

export default function* watchInputChange() {
  yield debounce(600, setSearchInputValue.type, inputChangeHandler);
}
