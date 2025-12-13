import { TileLink, Tile, Title, Poster, Year, Tags, Tag, Rating, StarIcon, Rate, Votes, Details } from './styled';
import noMovieImage from "../../../images/noMovieImage.svg";
import starIcon from "../../../images/starIcon.svg";
import { Genres } from "../genres";

export const MovieTile = ({
  poster,
  title,
  date,
  id,
  genres,
  rate,
  voteCount,
}) => {

  const APIimage = "https://image.tmdb.org/t/p/w500/";
  const movieGenres = Genres.filter((genre) => genres.includes(genre.id));

  return (
    <TileLink to={`/movie/?id=${id}`} key={id}>
      <Tile>
        <Poster
          src={poster ? `${APIimage}${poster}` : noMovieImage}
          alt=""
        />
        <Details>
          <Title>{title}</Title>
          <Year>{date}</Year>
          <Tags>
            {movieGenres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
          <Rating>
            <StarIcon src={starIcon} />
            <Rate>{rate}</Rate>
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </Details>
      </Tile>
    </TileLink>
  )
}