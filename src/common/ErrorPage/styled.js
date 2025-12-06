import styled from "styled-components";
import { Link } from "react-router";

export const Wrapper = styled.article`
    margin-top: 274px;
    display: grid;
    justify-items: center;
    text-align: center;
    grid-gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 16px;
    }
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
`;

export const Paragraph = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
`;

export const ButtonBack = styled(Link)`
    text-decoration: none;
    padding: 16px 24px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.blue};
    text-align: center;
`;