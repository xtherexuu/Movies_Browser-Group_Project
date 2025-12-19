import styled from "styled-components";
import PlaceholderMovieIcon from "../../images/placeholderMovieIcon.svg?react";
import { Link, NavLink } from "react-router";

export const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
`;

export const HeaderContent = styled.div`
  max-width: 1368px;
  width: 100%;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    flex-direction: column;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeadingLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 24px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.color.white};
  margin-left: 12px;
  margin-right: 80px;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    margin-right: 20px;
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 13px;
    margin-left: 8px;
  }
`;

export const StyledIcon = styled(PlaceholderMovieIcon)`
  width: 40px;
  height: 40px;
  path {
    stroke-width: 3px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    width: 17px;
    height: 17px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    gap: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 14px 24px;
  &:hover {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
  &.active {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
  border-radius: 24px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
