import styled from "styled-components";
import StarIcon from "../../../../images/starIcon.svg?react";

export const Wrapper = styled.section`
 display: flex;
 flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: relative;
`;

export const PosterSpace = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  background: 
    linear-gradient(
      189.44deg, 
      rgba(0, 0, 0, 0) 58.48%, 
      rgba(0, 0, 0, 0.106473) 63.17%, 
      rgba(0, 0, 0, 0.235359) 68.85%, 
      rgba(0, 0, 0, 0.492821) 78.08%, 
      rgba(0, 0, 0, 0.740286) 85.86%, 
      #000000 92.87%
    ),
    linear-gradient(
      180deg,
      #000000 0%, 
      rgba(0, 0, 0, 0.689555) 4.66%, 
      rgba(0, 0, 0, 0.439033) 9.34%, 
      rgba(0, 0, 0, 0.20628) 15.16%, 
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%, 
      rgba(0, 0, 0, 0.984059) 14.58%, 
      rgba(0, 0, 0, 0.967732) 15.44%, 
      rgba(0, 0, 0, 0.865569) 16.3%, 
      rgba(0, 0, 0, 0.230315) 22.87%, 
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      270deg, 
      #000000 14.11%, 
      rgba(0, 0, 0, 0.873268) 15.08%, 
      rgba(0, 0, 0, 0.720529) 16.51%, 
      rgba(0, 0, 0, 0.294577) 19.99%, 
      rgba(0, 0, 0, 0.159921) 21.88%, 
      rgba(0, 0, 0, 0) 25.68%
    );
`;

export const PosterBig = styled.img`
  //max-width: 100%;
  //height: 770px;
  width: 75%;
  z-index: -1;
`;

export const MainInfo = styled.div`
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  left: 14%;
  bottom: 7%;
`;

export const Title = styled.h1`
  line-height: 120%;
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 0px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 40px;
  margin-bottom: 16px;
`;

export const StyledStarIcon = styled(StarIcon)`
  padding-top: -5px;
  padding-right: 8px;
  height: 40px;
  width: 40px;
`;

export const Rate = styled.p`
  line-height: 130%;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const RateMax = styled.p`
  font-size: 16px;
  padding-left: 7px;
`;

export const Votes = styled.p`
  line-height: 120%;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;