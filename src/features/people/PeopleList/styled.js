import styled from "styled-components";

export const Wrapper = styled.div`
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

export const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;
`;
