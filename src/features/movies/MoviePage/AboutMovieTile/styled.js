import styled from "styled-components";

export const Container = styled.div`
    margin: 64px auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
     margin: 16px auto;
    }    
`;

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        padding: 25px;
    }    

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        padding: 16px;
    }    
`;

export const Image = styled.img`
    width: 312px;
    border-radius: 5px;
    grid-area: 1 / 1 / 3 / 2;

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        width: 100%;
        max-width: 312px;
        min-width: 114px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-area: unset;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        grid-area: unset;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        width: 114px;
        display: grid;
        grid-template-columns: auto 1fr;
    }
`;

export const Content = styled.div`
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        margin-left: 16px;
    }    
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
      font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
      font-size: 16px;
  }
`;

export const Year = styled.div`
    font-weight: 400;
    font-size: 22px;
    margin: 24px 0 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        color: ${({ theme }) => theme.color.waterloo};
        margin: 6px 0 8px;
        font-size: 13px;
    }
`;

export const Production = styled.p`
    font-size: 18px;
    font-weight:${({ theme }) => theme.fontWeight.regular};
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        font-size: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        font-size: 12px;
    }
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    padding-right: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        display: none;
    } 
`;

export const Release = styled.p`
    font-size: 18px;
    font-weight:${({ theme }) => theme.fontWeight.regular};

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        font-size: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        font-size: 12px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0px;
    margin: 16px -8px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        margin: 8px -8px;
    }
`;

export const Tag = styled.li`
    margin: 8px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        margin: 4px;
        font-size: 10px;
        line-height: 11px;
        padding: 4px 8px;
    }
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        margin-top: 0px;
    }
`;

export const RateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 16px;
`;

export const Rate = styled.p`
    line-height: 130%;
    font-size: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        font-size: 13px;
    }
`;

export const RateMax = styled.p`
    font-size: 14px;
    padding-left: 7px;
    white-space: pre;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        display: none;
    }
`;

export const Votes = styled.p`
    line-height: 120%;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding-left: 12px;
    white-space: pre;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
    }
`;

export const StarIcon = styled.img`
    width: 22px;
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        width: 16px;
        margin-right: 4px;
    }
`;

export const Description = styled.p`
    grid-area: 2 / 2 / 3 / 4;
    font-size: 20px;
    line-height: 1.6;
    margin-left: 40px;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakPoint.medium}) {
        grid-area: 2 / 1 / 3 / 3;
        grid-row-start: inherit;
        font-size: 18px;;
        margin: 16px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
        grid-area: 2 / 1 / 3 / 3;
        grid-row-start: inherit;
        font-size: 14px;
        margin: 16px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
        font-size: 14px;
        line-height: 22px;
        margin: 16px 0 0 0;
        grid-area: 2 / 1 / 3 / 3;
    }
`;