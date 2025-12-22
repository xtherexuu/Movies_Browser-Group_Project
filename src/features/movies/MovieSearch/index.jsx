import { useSelector } from "react-redux";
import { Paginator } from "../../../common/Paginator";
import { selectMovie } from "../movieSearchSlice";
import { MovieTile } from "../MovieTile";
import { useQueryParameters } from "../../queryParameters";
import { Wrapper, Header, MoviesContainer } from "../MovieList/styled";
import { NoResultsPage } from "../../../common/NoResultsPage";

export const SearchMovie = () => {
  const searchParams = useQueryParameters("search");
 
  const { results, total_pages, total_results } =
    useSelector(selectMovie);

  if (total_results === 0) return <NoResultsPage title={searchParams} />;
  else
    return (
      <Wrapper>
        <Header>
          {`Search results for "${searchParams}" (${total_results})`}
        </Header>
        <MoviesContainer>
          {results.map((movie) => (
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
        <Paginator pagesAmount={total_pages} />
      </Wrapper>
    );
};