import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import movieReducer from "./features/movies/movieSlice";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movie: movieReducer,
    },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;