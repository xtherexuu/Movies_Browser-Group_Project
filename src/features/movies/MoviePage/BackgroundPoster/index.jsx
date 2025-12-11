import { 
  Top, 
  Wrapper, 
  MainInfo, 
  Title, 
  Rating, 
  RateContainer, 
  Rate, 
  RateMax, 
  StyledStarIcon,
  Votes,
} from "./styled";

export const Header = () => {

  return (
    <Top>
      <Wrapper>
        <MainInfo>
          <Title>Movie long title</Title>
          <Rating>
            <RateContainer>
              <StyledStarIcon />
              <Rate>7,8</Rate>
              <RateMax>/ 10</RateMax>
            </RateContainer>
            <Votes>335 votes</Votes>
          </Rating>
        </MainInfo>
      </Wrapper>
    </Top>
  )
};
