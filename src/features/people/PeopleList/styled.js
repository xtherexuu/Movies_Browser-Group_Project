import styled from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1368px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
    padding: 0 16px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(198px, 1fr));
  gap: 24px;

   @media (max-width: ${({ theme }) => theme.breakPoint.small}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;
