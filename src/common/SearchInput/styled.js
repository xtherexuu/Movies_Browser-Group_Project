import styled from "styled-components";
import LoupeIcon from "../../images/loupeIcon.svg?react";
import { Link } from "react-router";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 432px;
  align-items: center;
  gap: 16px;
  flex-shrink: 1;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.waterloo};
  border-radius: 33px;
  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.color.silver};
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    gap: 8px;
    max-width: 100%;
  }
`;

export const StyledInput = styled.input`
  font-size: 16px;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 33px;
  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 13px;
    min-width: 200px;
  }
`;

export const SearchButton = styled(Link)`
  padding: 12px 0px 12px 24px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    padding: 12px 0px 12px 16px;
  }
`;

export const StyledLoupeIcon = styled(LoupeIcon)`
  width: 27px;
  height: 24px;
  @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
    width: 19px;
    height: 16px;
  }
`;
