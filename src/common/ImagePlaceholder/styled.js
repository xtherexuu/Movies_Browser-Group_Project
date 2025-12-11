import styled, { css } from "styled-components";

export const ImagePlaceholder = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}px) {
        width: 114px;
        height: 169px;
    }

    ${({ $main }) =>
        $main &&
        css`
            width: 312px;
            height: 464px;
            margin: auto;

            @media (max-width: ${({ theme }) => theme.breakPoint.medium}px) {
                margin: 0;
            }
        `}

    ${({ $personPage }) =>
        $personPage &&
        css`
            width: 399px;
            height: 564px;

            @media (max-width: ${({ theme }) => theme.breakPoint.medium}px) {
                width: 116px;
                height: 163px;
            }
        `}

    ${({ $forPerson }) =>
        $forPerson &&
        css`
            border-radius: 5px;
            width: 100%;
            height: 100%;
            margin: 0 auto;

            @media (max-width: ${({ theme }) => theme.breakPoint.medium}px) {
                width: 100%;
                height: 100%;
            }
        `}
`;

