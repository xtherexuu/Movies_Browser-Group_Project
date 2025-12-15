import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectMoviesStatus,
} from "../moviesListSlice";
import {
  fetchSearchMovie,
  selectSearchMovieStatus,
} from "../movieSearchSlice";
import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";
import { Paginator } from "../../../common/Paginator";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { SearchMovie } from "../MovieSearch";
import { useQueryParameters } from "../../queryParameters";


export const MovieListPage = () => {
  const status = useSelector(selectMoviesStatus);
  const data = useSelector(selectMovies);
  const dispatch = useDispatch();
  const statusSearchMovie = useSelector(selectSearchMovieStatus);
  const location = useLocation();

  // API page limit 500
  const APIpagesLimit = 500;
  const pageTitle = "Popular movies";
  const page = useQueryParameters("page");
  const searchQuery = useQueryParameters("search");

  const setPage = (page) => {
    if (page === null) return 1;
    else return page;
  };

  useEffect(() => {
    if (location.pathname.includes("/") && location.search.includes("search")) {
      dispatch(fetchSearchMovie({ query: searchQuery, page: setPage(page) }));
    }
    else
      dispatch(fetchMovies(setPage(page)));
  }, [searchQuery, page]);

  if (status === "loading") return <LoadingPage title={pageTitle} />;
  if (statusSearchMovie === "loading") return <LoadingPage title={"Search movie"} />
  if (status === "error") return <ErrorPage />;
  if (statusSearchMovie === "error") return <Error />;

  if (searchQuery !== null && statusSearchMovie === "success")
    return <SearchMovie />;

  if (status === "success" && searchQuery === null) {
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
