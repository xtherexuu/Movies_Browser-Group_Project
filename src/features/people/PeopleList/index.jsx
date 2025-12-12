import { PersonTile } from "../PersonTile";
import { Wrapper, Header, PeopleContainer } from "./styled";
import { Paginator } from "../../../features/queries/Paginator";

export const PeopleListPage = () => {
  // API page limit
  const pagesAmount = "500";

  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer>
        <PersonTile />
      </PeopleContainer>
      <Paginator pagesAmount={pagesAmount} />
    </Wrapper>
  );
};
