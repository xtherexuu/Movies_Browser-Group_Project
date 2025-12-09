import { TileLink, Tile, Picture, Name } from "./styled";
import noPersonImage from "../../../images/noPersonImage.svg"
import { APIimage } from "../../getData";

export const PersonTile = (
  id,
  name,
  profile,
) => {
  return (
    <TileLink to={`/person/?id=${id}`} key={id}>
      <Tile>
        <Picture 
          src={profile ? `${APIimage}${profile}` : noPersonImage}
          alt={name}
        />
        <Name>{name}</Name>
      </Tile>
    </TileLink>
  )
};