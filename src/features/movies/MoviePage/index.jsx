import { Container, Content } from "./styled";
import { Header } from "./BackgroundPoster";
import { AboutMovieTile } from "./AboutMovieTile";

export const MoviePage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <AboutMovieTile />
       
      </Content>
    </Container>
  )
};