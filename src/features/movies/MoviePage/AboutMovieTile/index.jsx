import {
  Container,
  Tile,
  Image,
  Content,
  Title,
  Year,
  Production,
  Label,
  Release,
  Tags,
  Tag,
  RateContainer,
  Rate,
  RateMax,
  StarIcon,
  Rating,
  Votes,
  Description
} from "./styled";
import noMovieImage from "../../../../images/noMovieImage.svg";
import starIcon from "../../../../images/starIcon.svg";

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
          <Production>
            <Label>Production:</Label>
            {productionCountry.map((country) => country.name)}
          </Production>
          <Release>
            <Label>Release date:</Label>
            {new Date(release).toLocaleDateString()}
          </Release>
          <Tags>
            {genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
          <Rating>
            <RateContainer>
              <StarIcon src={starIcon} />
              <Rate>{rate}</Rate>
              <RateMax>/ 10</RateMax>
            </RateContainer>
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </Content>
        <Description>{overview}</Description>
      </Tile>
    </Container>
  )
};