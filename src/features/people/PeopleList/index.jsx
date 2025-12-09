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

export const PeopleListPage = () => {
  const status = useSelector(selectPeopleStatus);
  const data = useSelector(selectPeople);
  const dispatch = useDispatch();

  // API page limit
  const pagesAmount = "500";
  const pageTitle = "Popular people";

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  if (status === "loading") {
    return (<LoadingPage title={pageTitle} />)
  }

  if (status === "error") {
    return (<ErrorPage />)
  }

  if (status === "success") {
    return (
      <Wrapper>
        <Header>{pageTitle}</Header>
        <PeopleContainer>
          {data.result.map((person) => 
            <PersonTile 
              id={person.id}
              name={person.name}
              profile={movie.profile_path}
            />
          )}
        </PeopleContainer>
        <Paginator pagesAmount={pagesAmount} />
      </Wrapper>
    )
  }
};