import styled from "styled-components";
import { Link } from "react-router";

export const TileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Tile = styled.article`
  width: 208px;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};
  background: ${({ theme }) => theme.color.white};
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
`;

export const Name = styled.h2`
  width: 176px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.woodstroke};
  font-size: 22px;
  margin-top: 16px;
  text-align: center;
`;