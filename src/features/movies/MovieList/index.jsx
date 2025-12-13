import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectMoviesStatus,
} from "./movieListSlice";
import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";
import { Paginator } from "../../../common/Paginator";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieListPage = () => {
  const status = useSelector(selectMoviesStatus);
  const data = useSelector(selectMovies);
  const dispatch = useDispatch();

  // API page limit 500
  const pagesAmount = 500;
  const pageTitle = "Popular movies";

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (status === "loading") {
    return (<LoadingPage title={pageTitle} />)
  }

  if (status === "error") {
    return (<ErrorPage />)
  }

  if (status === "success") {
    return (
      <Wrapper>
        <Header>{pageTitle}</Header>
        <MoviesContainer>
          {data.results.map((movie) => (
            <MovieTile
              id={movie.id}
              key={`${movie.id}${movie.index}`}
              poster={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              rate={movie.vote_average.toFixed(1)}
              voteCount={movie.vote_count}
              genres={movie.genre_ids}
            />
          ))}
        </MoviesContainer>
        <Paginator pagesAmount={pagesAmount} />
      </Wrapper>
    );
  };
};
