import { ButtonBack, Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as DangerIcon } from "../../images/dangerIcon.svg";

export const ErrorPage = () => (
    <Wrapper>
        <DangerIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Please check your network&nbsp;connection<br />
            and try again
        </Paragraph>
        <ButtonBack href={``} target="_blank">Back to home page</ButtonBack>
    </Wrapper>
);