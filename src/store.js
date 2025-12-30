import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "./features/movies/moviesListSlice";
import movieReducer from "./features/movies/movieSlice";
import peopleListReducer from "./features/people/peopleListSlice";
import searchPersonReducer from "./features/people/personSearchSlice";
import searchMovieReducer from "./features/movies/movieSearchSlice";
import personDetailsReducer from "./features/people/PersonPage/personSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    peopleList: peopleListReducer,
    searchPerson: searchPersonReducer,
    searchMovie: searchMovieReducer,
    personDetails: personDetailsReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
