import styled, { css } from "styled-components";
import ArrowLeft from "../../images/arrowLeft.svg?react";
import ArrowRight from "../../images/arrowRight.svg?react";

export const StyledPaginator = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const PaginatorText = styled.p`
  margin: 0 12px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    font-size: 10px;
    margin: 0 2px;
  }
`;

export const PaginatorSite = styled(PaginatorText)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};
`;

export const PaginatorButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.azureish};
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.darkGray};
  & svg {
    path {
      fill: ${({ theme }) => theme.color.blue};
    }
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    & svg {
      path {
        fill: ${({ theme }) => theme.color.waterloo};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    gap: 4px;
    padding: 7px 12px;
    & svg {
      width: 5px;
      height: 8px;
    }
  }
`;

export const ButtonText = styled.p`
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
    display: none;
  }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  ${({ $secound }) =>
    $secound &&
    css`
      display: none;
      @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        display: block;
      }
    `}
`;

export const StyledArrowRight = styled(ArrowRight)`
  ${({ $secound }) =>
    $secound &&
    css`
      display: none;
      @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        display: block;
      }
    `}
`;
