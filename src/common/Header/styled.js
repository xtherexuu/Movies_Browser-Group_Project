import styled from "styled-components";
import PlaceholderMovieIcon from "../../images/placeholderMovieIcon.svg?react";
import { NavLink } from "react-router";

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
  display: flex;
  justify-content: space-between;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 24px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.color.white};
  margin-left: 12px;
  margin-right: 80px;
`;

export const StyledIcon = styled(PlaceholderMovieIcon)`
  width: 40px;
  height: 40px;
  path {
    stroke-width: 3px;
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
  margin-right: 16px;
`;
