import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";

export const MovieListPage = () => {
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
        <MovieTile />
      </MoviesContainer>
    </Wrapper>
  );
};
