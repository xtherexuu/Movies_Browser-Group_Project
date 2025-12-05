import { Link } from "react-router";
import styled, { css } from "styled-components";
import ArrowLeft from "../../images/arrowLeft.svg?react";
import ArrowRight from "../../images/arrowRight.svg?react";

export const StyledPaginator = styled.div`
  display: flex;
  gap: 12px;
`;

export const PaginatorText = styled.p`
  margin: 0 12px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};
`;

export const PaginatorSite = styled(PaginatorText)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};
`;

export const PaginatorButton = styled(Link)`
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.azureish};
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  width: 7px;
  height: 11px;
  ${({ $secound }) =>
    $secound &&
    css`
      /* display: none; */
    `}
`;

export const StyledArrowRight = styled(ArrowRight)`
  width: 7px;
  height: 11px;
  ${({ $secound }) =>
    $secound &&
    css`
      /* display: none; */
    `}
`;
