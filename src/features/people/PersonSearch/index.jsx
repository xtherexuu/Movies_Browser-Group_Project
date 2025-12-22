import { useSelector } from "react-redux";
import { Paginator } from "../../../common/Paginator";
import { selectPerson } from "../personSearchSlice";
import { PersonTile } from "../PersonTile";
import { useQueryParameters } from "../../queryParameters";
import { Wrapper, Header, PeopleContainer } from "../PeopleList/styled";
import { NoResultsPage } from "../../../common/NoResultsPage";

export const SearchPerson = () => {
  const searchParams = useQueryParameters("search");

  const { results, total_pages, total_results } =
    useSelector(selectPerson);

  if (total_results === 0) return <NoResultsPage title={searchParams} />;
  else
    return (
      <Wrapper>
        <Header
          title={`Search results for "${searchParams}" (${total_results})`}
        />
        <PeopleContainer>
          {results.map((person) => (
            <PersonTile
              id={person.id}
              key={`${person.id}${person.index}`}
              name={person.name}
              profile={person.profile_path}
            />
          ))}
        </PeopleContainer>
        <Paginator pagesAmount={total_pages} />
      </Wrapper>
    );
};
