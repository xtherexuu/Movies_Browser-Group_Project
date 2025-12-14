import { getPopularPeople } from "../getData";
import { getPopularMovies } from "../getData";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
    fetchPeopleDetails,
    fetchPeopleDetailsError,
    fetchPeopleDetailsSuccess,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler(action) {
    try {
        yield delay(1000);
        const { id: personId } = action.payload;
        const personDetailsApi = `https://api.themoviedb.org/3/person/${personId}?api_key=f4abb2c51d8a72a2554`;
        const personMovieCreditsApi = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=f4abb2c51d8a72a2554`;
        const genereListApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=f4abb2c51d8a72a2554`;

        const personDetails = yield call(getPopularPeople, personDetailsApi);
        const personMovieCredits = yield call(getPopularPeople, personMovieCreditsApi);
        const genereList = yield call(getPopularMovies, genereListApi);

        yield put(fetchPeopleDetailsSuccess({
            personDetails,
            personMovieCredits,
            genereList,
        })
        );
    } catch (error) {
        yield put(fetchPeopleDetailsError());
    }
}

export function* peopleDetailsSaga() {    
    yield takeEvery(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}