import { Container, Content, Wrapper, Title, List } from "./styled";
import { Header } from "./BackgroundPoster";
import { AboutMovieTile } from "./AboutMovieTile";

export const MoviePage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <AboutMovieTile />
        <Wrapper>
          <Title>Cast</Title>
          <List></List>
        </Wrapper>
        <Wrapper>
          <Title>Crew</Title>
          <List></List>
        </Wrapper>
      </Content>
    </Container>
  )
};