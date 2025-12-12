import {
  Container, 
  Tile, 
  Image, 
  Content, 
  Title, 
  Year, 
  Tags, 
  Tag, 
  Description
} from "./styled";
import noMovieImage from "../../../../images/noMovieImage.svg"; 

const imagesAPIw400 = "https://image.tmdb.org/t/p/w400";

export const AboutMovieTile = ({
  aboutMovie,
  poster,
  title,
  date,
  genres,
  productionCountry,
  release,
  rate,
  voteCount,
  overview,
}) => {
  return (
    <Container>
      <Tile>
        <Image src={poster ? `${imagesAPIw400}${poster}` : noMovieImage} alt="" />
        <Content>
          <Title>{title}</Title>
          <Year>{date ? date.toString().slice(0, 4) : null}</Year>
          <Tags>
            <Tag>Action</Tag>
          </Tags>
          <Description>{overview}</Description>
        </Content>
      </Tile>
    </Container>
  )
};