import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "../../images/loadingIcon.svg";

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
`;

export const IconWrapper = styled.div`
    text-align: center;
`;

export const Icon = styled(LoadingIcon)`
    animation: ${rotate} 2s linear infinite;
`;