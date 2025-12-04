import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
`;

export const Header = styled.h1`

`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
  gap: 24px;
`;
