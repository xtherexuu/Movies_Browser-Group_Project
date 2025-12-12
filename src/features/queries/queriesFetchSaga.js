// import { debounce, select, put } from "redux-saga/effects";
// import { setSearch, setPage } from "./queriesSlice";
// import { setSection } from "../routing/routeSlice";
// import { selectSearch, selectPage } from "./queriesSlice";
// import { selectSection } from "../routing/routeSlice";
// // import { fetchMovies } from "../movies/MovieList/movieListSlice";
// // import { fetchPeople } from "../people/PeopleList/peopleSlice";

// function* triggerFetchWorker() {
//   const section = yield select(selectSection);
//   if (section === "movies") {
//     const search = yield select(selectSearch);
//     const page = yield select(selectPage);
//     // ...
//     // Here should be the call for the API to fetch movies (search, page)
//     // yield put(fetchMovies({ search, page }));
//   } else if (section === "people") {
//     const search = yield select(selectSearch);
//     const page = yield select(selectPage);
//     // ...
//     // Here should be the call for the API to fetch people (search, page)
//     // yield put(fetchPeople({ search, page }));
//   }
// }

// export function* queriesFetchSaga() {
//   // debounce(0) spina setSearch/setPage/setSection w jedną paczkę,
//   // więc nawet gdy setSearch i setPage lecą zaraz po sobie, wywoła się jeden fetch.
//   yield debounce(
//     0,
//     [setSearch.type, setPage.type, setSection.type],
//     triggerFetchWorker
//   );
// }
