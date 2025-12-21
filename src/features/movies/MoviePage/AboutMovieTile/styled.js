import styled from "styled-components";

export const Container = styled.div`
    margin: 64px 0px;
`;

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;  
`;

export const Image = styled.img`
    width: 312px;
    //height: 464px;

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
      max-width: 114px;
  }
`;

export const Content = styled.div`

`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 24px;
  }
`;

export const Year = styled.div`
    font-weight: 400;
    font-size: 22px;
    margin: 24px 0 24px;
`;

export const Production = styled.p`
  font-size: 18px;
  font-weight:${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 8px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  padding-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    display: none;
  } 
`;

export const Release = styled.p`
  font-size: 18px;
  font-weight:${({ theme }) => theme.fontWeight.regular};
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0px;
    margin: 16px -8px;
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.li`
    margin: 8px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 24px;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 40px;
  margin-bottom: 16px;
`;

//export const StyledStarIcon = styled(StarIcon)`
//  padding-top: -5px;
//  padding-right: 8px;
//  height: 40px;
//  width: 40px;
//`;

export const Rate = styled.p`
  line-height: 130%;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 14px;
  }
`;

export const RateMax = styled.p`
  font-size: 16px;
  padding-left: 7px;
`;

export const Votes = styled.p`
  line-height: 120%;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-left: 12px;
`;
export const StarIcon = styled.img`
  width: 22px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
`;