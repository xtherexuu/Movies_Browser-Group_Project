import styled from "styled-components";

export const Wrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1384px;
  margin: auto;
`;

export const Header = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodstroke};
  line-height: 1.2;
  margin: 56px 0 16px 16px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
  gap: 24px;
  margin: 0 16px;
`;
