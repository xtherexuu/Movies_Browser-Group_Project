import styled from "styled-components";

export const Container = styled.main`
  flex-grow: 1;
  width: 100%;
  margin: auto;
`;

export const Content = styled.section`
  // max-width: 1368px;
  max-width: 1400px;
  padding: 0 16px;
  margin: auto;
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 64px auto 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;
  margin: 64px 14px 24px 14px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    margin-bottom: 12px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;
  margin: 24px 0 40px 0;

  //@media (max-width: ${({ theme }) => theme.breakPoint.semiMedium}) {
  //  display: grid;
  //  grid-template-columns: repeat(2, 1fr);
  //  gap: 18px;
  //}

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
  }
`;