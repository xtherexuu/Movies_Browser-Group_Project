import { PersonTile } from "../PersonTile";
import { Wrapper, Header, PeopleContainer } from "./styled"
import { Paginator } from "../../../common/Paginator";

export const PeopleListPage = () => {
  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer>
        <PersonTile />
      </PeopleContainer>
      <Paginator />
    </Wrapper>
  )
};