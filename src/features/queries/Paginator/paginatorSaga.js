import { takeEvery } from "redux-saga/effects";

function* changePageHandler() {
  // ...
  // Here is the space to call action which will be downloading movies from API conditionally.
}

export default function* watchPageChange() {
  yield takeEvery("queries/setPage", changePageHandler);
}
