import styled from "styled-components";

export const Container = styled.div`
    margin: 64px 0px;
`;

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Content = styled.div`

`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const Year = styled.div`
    font-weight: 400;
    font-size: 22px;
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0px;
    margin: 16px -8px;
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.li`
    margin: 8px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
`;