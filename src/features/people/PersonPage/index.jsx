import { useParams } from "react-router";
import {
  Biography,
  PersonImage,
  PersonInformationContainer,
  PersonName,
  PersonText,
  PersonTile,
  Wrapper,
  PersonInformationWrapper,
  CreditsContainer,
  ExperienceTypeHeading,
  Credits,
} from "./styled";
import { useEffect } from "react";
import {
  fetchPersonData,
  selectPersonDetails,
  selectPersonFetchStatus,
} from "./personSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../movies/MovieTile";
import { nanoid } from "@reduxjs/toolkit";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, birthDate, birthPlace, biography, imageUrl, cast, crew } =
    useSelector(selectPersonDetails);
  const loadingStatus = useSelector(selectPersonFetchStatus);
  useEffect(() => {
    dispatch(fetchPersonData(id));
  }, []);
  switch (loadingStatus) {
    case "init":
      return <LoadingPage />;
    case "loading":
      return <LoadingPage />;
    case "error":
      return <ErrorPage />;
    case "finished":
      return (
        <Wrapper>
          <PersonTile>
            <PersonImage src={imageUrl} />
            <PersonName>{name}</PersonName>
            <PersonInformationWrapper>
              <PersonInformationContainer>
                <PersonText $type="title">Date&nbsp;of&nbsp;birth: </PersonText>
                <PersonText $type="info">
                  {new Date(birthDate).toLocaleDateString("pl")}
                </PersonText>
              </PersonInformationContainer>
              <PersonInformationContainer>
                <PersonText $type="title">
                  Place&nbsp;of&nbsp;birth:{" "}
                </PersonText>
                <PersonText $type="info">{birthPlace}</PersonText>
              </PersonInformationContainer>
            </PersonInformationWrapper>
            <Biography>{biography}</Biography>
          </PersonTile>
          {cast?.length > 0 ? (
            <CreditsContainer>
              <ExperienceTypeHeading>
                Movies - cast {`(${cast.length})`}
              </ExperienceTypeHeading>
              <Credits>
                {cast.map((credit) => {
                  return (
                    <MovieTile
                      id={credit.id}
                      key={`id-${credit.id}-${nanoid()}-cast`}
                      poster={credit.poster_path}
                      title={credit.title || credit.name}
                      additionalInfo={`${credit.character || ""}${
                        credit.release_date
                          ? ` (${new Date(credit.release_date).getFullYear()})`
                          : ""
                      }`}
                      rate={credit.vote_average.toFixed(1)}
                      voteCount={credit.vote_count}
                      genres={credit.genre_ids}
                    />
                  );
                })}
              </Credits>
            </CreditsContainer>
          ) : null}
          {crew?.length > 0 ? (
            <CreditsContainer>
              <ExperienceTypeHeading>
                Movies - crew {`(${crew.length})`}
              </ExperienceTypeHeading>
              <Credits>
                {crew.map((credit) => {
                  return (
                    <MovieTile
                      id={credit.id}
                      key={`id-${credit.id}-${nanoid()}-crew`}
                      poster={credit.poster_path}
                      title={credit.title || credit.name}
                      additionalInfo={`${credit.department || ""}${
                        credit.release_date
                          ? ` (${new Date(credit.release_date).getFullYear()})`
                          : ""
                      }`}
                      rate={credit.vote_average.toFixed(1)}
                      voteCount={credit.vote_count}
                      genres={credit.genre_ids}
                    />
                  );
                })}
              </Credits>
            </CreditsContainer>
          ) : null}
        </Wrapper>
      );
    default:
      return <ErrorPage />;
  }
};
