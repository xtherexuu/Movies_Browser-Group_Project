import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchPeople, fetchPeopleSuccess, fetchPeopleError } from "./peopleListSlice";
import { getPopularPeople } from "../getData";

const loadingDelay = 2_000;

function* fetchPeopleHandler({ payload }) {
    try {
        yield delay(loadingDelay); //just to demo the loading
        const PeopleDate = yield call(getPopularPeople, payload);
        yield put(fetchPeopleSuccess(PeopleDate));
    } catch (error) {
        yield put(fetchPeopleError());
        yield call(alert, "Download failed, please try again or check your internet connection");
    }
}

export function* peopleListSaga() {
    yield takeLatest(fetchPeople, fetchPeopleHandler);
}