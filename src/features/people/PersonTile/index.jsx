import { TileLink, Tile, Picture, Name } from "./styled";
import noPersonImage from "../../../images/noPersonImage.svg"

export const PersonTile = () => {
  return (
    <TileLink to="/person">
      <Tile>
        <Picture src={noPersonImage} />
        <Name>Full Name</Name>
      </Tile>
    </TileLink>
  )
};