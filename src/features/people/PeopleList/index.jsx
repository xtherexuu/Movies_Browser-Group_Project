import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeople,
  selectPeopleStatus,
} from "../peopleListSlice";
import { PersonTile } from "../PersonTile";
import { Wrapper, Header, PeopleContainer } from "./styled"
import { Paginator } from "../../../common/Paginator";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { useQueryParameters } from "../../queryParameters";


export const PeopleListPage = () => {
  const status = useSelector(selectPeopleStatus);
  const data = useSelector(selectPeople);
  const dispatch = useDispatch();
  const page = useQueryParameters("page");
  // API page limit
  const APIpagesLimit = "500";
  const pageTitle = "Popular people";

  const setPage = (page) => {
    if (page === null) {
      return 1 
    } else {
      return page
    }
  };

  useEffect(() => {
    dispatch(fetchPeople(setPage(page)));
  }, []);

  if (status === "loading") {
    return (<LoadingPage title={pageTitle} />)
  }

  if (status === "error") {
    return (<ErrorPage />)
  }

  if (status === "success") {
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