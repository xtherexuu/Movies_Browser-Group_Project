import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
} from "./peopleListSlice";
import { getPopularPeople } from "../getData";

function* fetchPeopleHandler({ payload }) {
  try {
    const PeopleDate = yield call(getPopularPeople, payload);
    yield put(fetchPeopleSuccess(PeopleDate));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(
      alert,
      "Download failed, please try again or check your internet connection"
    );
  }
}

export function* peopleListSaga() {
  yield takeLatest(fetchPeople, fetchPeopleHandler);
}
