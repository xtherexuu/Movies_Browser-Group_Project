import { PersonTile } from "../PersonTile";
import { Wrapper, Header, PeopleContainer } from "./styled"

export const PeopleListPage = () => {
  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer>
        <PersonTile />
      </PeopleContainer>
    </Wrapper>
  )
};