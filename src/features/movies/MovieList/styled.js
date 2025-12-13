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
  margin-bottom: 24px;
`;

export const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
  gap: 24px;
`;
