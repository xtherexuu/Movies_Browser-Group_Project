import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectMoviesStatus,
} from "../moviesListSlice";
import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";
import { Paginator } from "../../../common/Paginator";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";

export const useQueryParameters = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const MovieListPage = () => {
  const status = useSelector(selectMoviesStatus);
  const data = useSelector(selectMovies);
  const dispatch = useDispatch();

  // API page limit 500
  const APIpagesLimit = 500;
  const pageTitle = "Popular movies";
  const page = useQueryParameters("page");

  const setPage = (page) => {
    if (page === null) return 1;
    else return page;
  };

  useEffect(() => {
    dispatch(fetchMovies(setPage(page)));
  }, []);

  if (status === "loading") {
    return (<LoadingPage title={pageTitle} />)
  }

  if (status === "error") {
    return (<ErrorPage />)
  }

  if (status === "success") {
    const pagesAmount = data.total_pages;
    const setPagesAmountMax = () => {
      if (pagesAmount < APIpagesLimit)
        return pagesAmount;
      else return APIpagesLimit;
    };

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
        <Paginator pagesAmount={setPagesAmountMax()} />
      </Wrapper>
    );
  };
};
