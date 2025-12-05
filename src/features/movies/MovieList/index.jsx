import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "./movieListSlice"
import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";

export const MovieListPage = () => {
  const status = useSelector(selectMoviesStatus);
  const data = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (status === "success")
    return (
      <Wrapper>
        <Header>Popular movies</Header>
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
      </Wrapper>
    )
};