import { Header, MoviesContainer, Wrapper } from "./styled";
import { MovieTile } from "../MovieTile";
import Paginator from "../../../common/Paginator";

export const MovieListPage = () => {
  const pageAmount = 430;
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
        <MovieTile />
      </MoviesContainer>
      <Paginator pagesAmount={pageAmount} />
    </Wrapper>
  );
};
