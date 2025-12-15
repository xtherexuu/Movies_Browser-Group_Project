import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import peopleListReducer from "./features/people/peopleListSlice";
import searchPersonReducer from "./features/people/personSearchSlice";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        peopleList: peopleListReducer,
        searchPerson: searchPersonReducer,
    },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;