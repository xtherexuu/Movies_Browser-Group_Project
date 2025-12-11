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

export const AboutMovieTile = () => {
  return (
    <Container>
      <Tile>
        <Image src={noMovieImage} alt="" />
        <Content>
          <Title>
            Mulan
          </Title>
          <Year>
            2020
          </Year>
          <Tags>
            <Tag>Action</Tag>
          </Tags>
          <Description>
            A young Chinese maiden disguises herself as a male warrior in order to save her father.
            Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
          </Description>
        </Content>
      </Tile>
    </Container>
  )
};