import { ButtonBack, Header, Paragraph, Wrapper } from "./styled";
import DangerIcon from "../../images/dangerIcon.svg?react";

export const ErrorPage = () => (
    <Wrapper>
        <DangerIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Please check your network&nbsp;connection<br />
            and try again
        </Paragraph>
        <ButtonBack to="/movies">Back to home page</ButtonBack>
    </Wrapper>
);