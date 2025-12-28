import styled from "styled-components";
import { Link } from "react-router";

export const TileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    transform: scale(1.03, 1.03);
    transition: 0.5s ease-out 0s;
  }
`;

export const Tile = styled.article`
  min-width: 208px;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    min-width: 136px;
    padding: 8px;
  }
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    width: 120px;
  }
`;

export const Name = styled.h2`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.woodstroke};
  font-size: 22px;
  margin-top: 16px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 18px;
    margin-top: 8px;
  }
`;

export const FunctionName = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 14px;
    line-height: 18px;
  }
`;