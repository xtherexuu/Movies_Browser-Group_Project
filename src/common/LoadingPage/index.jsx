import { Container, Header, Icon, IconWrapper } from "./styled";

export const LoadingPage = ({ title }) => (
    <Container>
        <Header>{title && <>Search results for "{title}"</>}</Header>
        <IconWrapper>
            <Icon />
        </IconWrapper>
    </Container>
);