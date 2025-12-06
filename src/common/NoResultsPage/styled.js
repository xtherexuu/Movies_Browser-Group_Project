import styled from "styled-components";
import NoResultsImage from "../../images/noResultsImage.svg?react";

export const Container = styled.div`
    padding: 16px;
`;

export const Header = styled.h1`
    font-size: 36px;
    line-height: 1.2;
    margin: 150px 0 0 276px;

    @media(max-width: ${({ theme }) => theme.breakPoint.medium}px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.3;
        margin: 166px 0 0 16px;
    }
`;

export const IconWrapper = styled.div`
    text-align: center;
`;

export const Image = styled(NoResultsImage)`
    @media(max-width: ${({ theme }) => theme.breakPoint.medium}px) {
        width: 246px;
        height: 196px;
    }
`;