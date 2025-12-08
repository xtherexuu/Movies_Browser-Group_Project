import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import rootSaga from "./rootSaga";
import queriesReducer from "../src/features/queries/queriesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    queries: queriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
