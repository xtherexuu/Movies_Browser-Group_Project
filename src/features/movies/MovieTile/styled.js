import styled from "styled-components";
import { Link } from "react-router";

export const TileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Tile = styled.article`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
`;

export const Title = styled.h2`
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  margin-top: 16px;
`;

export const Year = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.color.silver};
  margin: 8px 0;
`
export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0px -8px;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.color.black};
  margin: 8px;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background: ${({ theme }) => theme.color.mystic};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0 0 0;
  max-width: 250px;
  line-height: 24px;
`;

export const StarIcon = styled.img`
  width: 22px;
`;

export const Rate = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};
`;

export const Votes = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};
`;