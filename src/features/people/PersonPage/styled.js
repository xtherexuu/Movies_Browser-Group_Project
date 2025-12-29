import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 50px;
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    padding: 16px;
  }
`;

export const PersonTile = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 399px 1fr;
  grid-template-areas:
    "i n"
    "i c"
    "i b";
  grid-column-gap: 40px;
  grid-row-gap: 25px;
  align-items: start;
  align-content: start;
  align-content: stretch;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    grid-template-columns: 200px 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "i n"
      "i c"
      "b b";
    grid-template-columns: 150px 1fr;
    grid-gap: 16px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    grid-template-columns: 116px 1fr;
    box-shadow: 0px 4px 12px 0px #bac7d580;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  border-radius: 5px;
  grid-area: i;
`;

export const PersonName = styled.h2`
  grid-area: n;
  align-self: start;
  font-weight: 600;
  font-size: 36px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 14px;
  }
`;

export const PersonInformationWrapper = styled.div`
  grid-area: c;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PersonInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const PersonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  ${({ $type }) =>
    $type === "info"
      ? css`
          color: ${({ theme }) => theme.color.black};
        `
      : $type === "title"
      ? css`
          color: ${({ theme }) => theme.color.raven};
        `
      : null}
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    & > span.firstPart {
      display: none;
    }
    & > span.secoundPart {
      text-transform: capitalize;
    }
  }
`;

export const Biography = styled.p`
  grid-area: b;
  align-self: start;
  text-align: justify;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 14px;
  }
`;

export const CreditsContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const ExperienceTypeHeading = styled.h3`
  font-weight: 600;
  font-size: 36px;
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 27px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 20px;
  }
  margin-bottom: 24px;
  margin-top: 64px;
`;

export const Credits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
`;
