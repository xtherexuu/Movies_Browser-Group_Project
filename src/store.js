import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import rootSaga from "./rootSaga";
import queriesReducer from "./features/queries/queriesSlice";
import routeReducer from "./features/routing/routeSlice";
import serachInputReducer from "./features/queries/SearchInput/searchInputSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    queries: queriesReducer,
    route: routeReducer,
    searchInput: serachInputReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
