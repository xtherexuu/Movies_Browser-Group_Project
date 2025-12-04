import { TileLink, Tile, Title, Poster, Year, Tags, Tag, Rating, StarIcon, Rate, Votes } from './styled';
import noMovieImage from "../../../images/noMovieImage.svg";
import starIcon from "../../../images/starIcon.svg";

export const MovieTile = () => {

  return (
    <TileLink>
      <Tile>
        <Poster
          src={noMovieImage}
          alt=""
        />
        <Title>Nazwa filmu</Title>
        <Year>2020</Year>
        <Tags>
          <Tag>Action</Tag>
        </Tags>
        <Rating>
          <StarIcon src={starIcon} />
          <Rate>10</Rate>
          <Votes>78 votes</Votes>
        </Rating>
      </Tile>
    </TileLink>
  )
}