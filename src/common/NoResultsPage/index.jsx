import { Container, Header, IconWrapper, Image } from "./styled";

export const NoResultsPage = ({ title }) => (
    <Container>
        <Header>{title && <>Sorry, there are no results for "{title}"</>}</Header>
        <IconWrapper>
            <Image />
        </IconWrapper>
    </Container>
);