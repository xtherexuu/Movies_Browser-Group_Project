import styled from "styled-components";
import LoupeIcon from "../../images/loupeIcon.svg?react";
import { Link } from "react-router";

export const StyledInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.waterloo};
  border-radius: 33px;
  display: flex;
  align-items: center;
  gap: 16px;
  &:has(input:focus) {
    outline: 2px solid ${({theme}) => theme.color.silver};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 33px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled(Link)`
  padding: 12px 0px 12px 24px;
`;

export const StyledLoupeIcon = styled(LoupeIcon)`
  width: 27px;
  height: 24px;
  /* position: absolute; */
  font-size: 16px;
`;
