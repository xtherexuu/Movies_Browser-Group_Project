import { 
  Wrapper, 
  PosterSpace, 
  MainInfo, 
  Title, 
  Rating, 
  RateContainer, 
  Rate, 
  RateMax, 
  StyledStarIcon,
  Votes,
  PosterBig,
} from "./styled";
import { imagesFullApi } from "../../../getData";

export const Header = ({
  poster,
  title,
  rate,
  voteCount
}) => {

  return (
    <Wrapper>
      <PosterSpace>
        <PosterBig src={`${imagesFullApi}/original${poster}`} />
        <MainInfo>
          <Title>{title}</Title>
          <Rating>
            <RateContainer>
              <StyledStarIcon />
              <Rate>{rate}</Rate>
              <RateMax>/ 10</RateMax>
            </RateContainer>
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </MainInfo>
      </PosterSpace>
    </Wrapper>
  )
};
