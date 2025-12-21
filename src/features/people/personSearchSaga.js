 import { call, put, takeLatest } from "redux-saga/effects"
import { getSearchPerson } from "../getData";
import { fetchSearchPerson, fetchSearchPersonError, fetchSearchPersonSuccess } from "./personSearchSlice";

function* fetchSearchPersonHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  else {
    try {
      const searchPerson = yield call(getSearchPerson, query, page);
      yield put(fetchSearchPersonSuccess(searchPerson));
    }
    catch (error) {
      yield put(fetchSearchPersonError());
      yield call(alert, "Download failed, please try again or check your internet connection")
    }
  }
};

export function* searchPersonSaga() {
  yield takeLatest(fetchSearchPerson, fetchSearchPersonHandler);
}

