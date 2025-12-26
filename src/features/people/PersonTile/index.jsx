import { TileLink, Tile, Picture, Name, FunctionName } from "./styled";
import noPersonImage from "../../../images/noPersonImage.svg"
import { imagesAPIw200 } from "../../getData";

export const PersonTile = ({
  id,
  name,
  profile,
  role,
}) => {
  return (
    <TileLink to={`/people/${id}`} key={id}>
      <Tile>
        <Picture 
          src={profile ? `${imagesAPIw200}${profile}` : noPersonImage}
          alt={name ? name : null}
        />
        <Name>{name ? name : null}</Name>
        <FunctionName>{role ? role : null}</FunctionName>
      </Tile>
    </TileLink>
  )
};