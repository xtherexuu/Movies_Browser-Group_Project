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
import noPersonImage from "../../../images/noPersonImage.svg";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, birthDate, birthPlace, biography, imageUrl, cast, crew } =
    useSelector(selectPersonDetails);
  const loadingStatus = useSelector(selectPersonFetchStatus);
  useEffect(() => {
    dispatch(fetchPersonData(id));
  }, [id, dispatch]);
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
            <PersonImage src={imageUrl ? imageUrl : noPersonImage} />
            <PersonName>{name}</PersonName>
            {birthDate || birthPlace ? (
              <PersonInformationWrapper>
                {birthDate && (
                  <PersonInformationContainer>
                    <PersonText $type="title">
                      <span className="firstPart">Date&nbsp;of&nbsp;</span>
                      <span className="secoundPart">birth</span>:{" "}
                    </PersonText>
                    <PersonText $type="info">{birthDate}</PersonText>
                  </PersonInformationContainer>
                )}
                {birthPlace && (
                  <PersonInformationContainer>
                    <PersonText $type="title">
                      Place&nbsp;of&nbsp;birth:{" "}
                    </PersonText>
                    <PersonText $type="info">{birthPlace}</PersonText>
                  </PersonInformationContainer>
                )}
              </PersonInformationWrapper>
            ) : null}
            <Biography>{biography}</Biography>
          </PersonTile>
          {cast?.length > 0 ? (
            <CreditsContainer>
              <ExperienceTypeHeading>
                Movies - cast {`(${cast.length})`}
              </ExperienceTypeHeading>
              <Credits>
                {cast.map((credit) => {
                  const year = credit.release_date
                    ? new Date(credit.release_date).getFullYear()
                    : null;

                  const hasRole = !!credit.character;
                  const hasYear = !!year;
                  const hasInfo = hasRole || hasYear;
                  return (
                    <MovieTile
                      id={credit.id}
                      key={`id-${credit.id}-${credit.character}-${credit.title}-cast`}
                      poster={credit.poster_path}
                      title={credit.title || credit.name}
                      $hasYear={hasYear}
                      $hasRole={hasRole}
                      additionalInfo={
                        hasInfo ? (
                          <>
                            {hasRole && (
                              <span className="role">{credit.character}</span>
                            )}
                            {hasRole && hasYear ? " " : null}
                            {hasYear && (
                              <>
                                <span className="bracket">{"("}</span>
                                <span className="year">{year}</span>
                                <span className="bracket">{")"}</span>
                              </>
                            )}
                          </>
                        ) : null
                      }
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
                  const year = credit.release_date
                    ? new Date(credit.release_date).getFullYear()
                    : null;

                  const hasRole = !!credit.department;
                  const hasYear = !!year;
                  const hasInfo = hasRole || hasYear;
                  return (
                    <MovieTile
                      id={credit.id}
                      key={`id-${credit.id}-${credit.department}-${credit.title}-crew`}
                      poster={credit.poster_path}
                      title={credit.title || credit.name}
                      $hasYear={hasYear}
                      $hasRole={hasRole}
                      additionalInfo={
                        hasInfo ? (
                          <>
                            {hasRole && (
                              <span className="role">{credit.department}</span>
                            )}
                            {hasRole && hasYear ? " " : null}
                            {hasYear && (
                              <>
                                <span className="bracket">{"("}</span>
                                <span className="year">{year}</span>
                                <span className="bracket">{")"}</span>
                              </>
                            )}
                          </>
                        ) : null
                      }
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
