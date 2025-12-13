import styled, { keyframes } from "styled-components";
import LoadingIcon from "../../images/loadingIcon.svg?react";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

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

export const Icon = styled(LoadingIcon)`
    animation: ${rotate} 2s linear infinite;
    @media(max-width: ${({ theme }) => theme.breakPoint.medium}px) {
        height: 35px;
    }
`;