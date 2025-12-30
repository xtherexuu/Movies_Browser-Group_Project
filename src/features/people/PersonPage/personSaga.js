import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  fetchPersonData,
  selectPersonId,
  setFetchStatus,
  setPersonDetails,
} from "./personSlice";
import axios from "axios";

async function getPersonObject(id) {
  const api_key = "f4abb2c51d8a72a2554557a4a8c06397";
  const personDetailsRes = await axios({
    params: {
      api_key,
      language: "en-US",
    },
    url: `https://api.themoviedb.org/3/person/${id}`,
  });
  const { name, birthday, place_of_birth, biography, profile_path } =
    personDetailsRes.data;
  const personCreditsRes = await axios({
    params: {
      api_key,
      language: "en-US",
    },
    url: `https://api.themoviedb.org/3/person/${id}/combined_credits`,
  });
  const { cast, crew } = personCreditsRes.data;
  const personDetails = {
    name,
    birthDate: new Date(birthday).toLocaleDateString("pl"),
    birthPlace: place_of_birth,
    biography,
    imageUrl: profile_path
      ? `https://image.tmdb.org/t/p/w400/${profile_path}`
      : null,
    cast: [...cast],
    crew: [...crew],
  };
  return personDetails;
}

function* handleFetchPersonData() {
  const id = yield select(selectPersonId);
  try {
    const personDetails = yield call(getPersonObject, id);
    yield put(setPersonDetails(personDetails));
    yield put(setFetchStatus("finished"));
  } catch {
    yield put(setFetchStatus("error"));
  }
}

export default function* watchFetchPerson() {
  yield takeEvery(fetchPersonData.type, handleFetchPersonData);
}
