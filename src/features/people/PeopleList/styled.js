import styled from "styled-components";

export const Wrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1368px;
  margin: auto;
`;

export const Header = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  line-height: 1.2;
  margin-top: 54px;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

export const PeopleContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(198px, 1fr));
  gap: 24px;
  margin: 16px;

   @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;
