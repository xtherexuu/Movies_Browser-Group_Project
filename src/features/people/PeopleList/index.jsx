import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeople,
  selectPeopleStatus,
} from "../peopleListSlice";
import {
  fetchSearchPerson,
  selectSearchPersonStatus,
} from "../personSearchSlice";
import { PersonTile } from "../PersonTile";
import { Wrapper, Header, PeopleContainer } from "./styled"
import { Paginator } from "../../../common/Paginator";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { SearchPerson } from "../PersonSearch";
import { useQueryParameters } from "../../queryParameters";


export const PeopleListPage = () => {
  const status = useSelector(selectPeopleStatus);
  const data = useSelector(selectPeople);
  const dispatch = useDispatch();
  const page = useQueryParameters("page");
  const searchQuery = useQueryParameters("search");
  // API page limit
  const APIpagesLimit = "500";
  const pageTitle = "Popular people";
  const statusSearchPerson = useSelector(selectSearchPersonStatus);
  const location = useLocation();

  const setPage = (page) => {
    if (page === null) {
      return 1
    } else {
      return page
    }
  };

  console.log(location);

  useEffect(() => {
    if (location.pathname.includes("/people") && location.search.includes("search")) {
      dispatch(fetchSearchPerson({ query: searchQuery, page: setPage(page) }));
    }
    else
      dispatch(fetchPeople(setPage(page)));
  }, [searchQuery, page]);


  if (status === "loading") return <LoadingPage title={pageTitle} />;
  if (statusSearchPerson === "loading") return <LoadingPage title={"Search person"} />
  if (status === "error") return <ErrorPage />;
  if (statusSearchPerson === "error") return <Error />;
  if (searchQuery !== null && statusSearchPerson === "success")
    return <SearchPerson />;


  if (status === "success" && searchQuery === null) {
    const pagesAmount = data.total_pages;
    const setPagesAmountMax = () => {
      if (pagesAmount < APIpagesLimit)
        return pagesAmount;
      else return APIpagesLimit;
    }

    return (
      <Wrapper>
        <Header>{pageTitle}</Header>
        <PeopleContainer>
          {data.results.map((person) => (
            <PersonTile
              id={person.id}
              key={`${person.id}${person.index}`}
              name={person.name}
              profile={person.profile_path}
            />
          ))}
        </PeopleContainer>
        <Paginator pagesAmount={setPagesAmountMax()} />
      </Wrapper>
    )
  }
};