import { TileLink, Tile, Picture, Name } from "./styled";
import noPersonImage from "../../../images/noPersonImage.svg"
import { imagesAPIw200 } from "../../getData";

export const PersonTile = ({
  id,
  name,
  profile,
}) => {
  return (
    <TileLink to={`/person/?id=${id}`} key={id}>
      <Tile>
        <Picture 
          src={profile ? `${imagesAPIw200}${profile}` : noPersonImage}
          alt={name ? name : null}
        />
        <Name>{name ? name : null}</Name>
      </Tile>
    </TileLink>
  )
};