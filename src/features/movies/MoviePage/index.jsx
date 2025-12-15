import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router";

import {
  fetchMovieById,
  selectMovieInfo,
  selectMovieStatus,
} from "../movieSlice";

import { Container, Content, Wrapper, Title, List } from "./styled";
import { Header } from "./BackgroundPoster";
import { AboutMovieTile } from "./AboutMovieTile";
import { PersonTile } from "../../people/PersonTile";

export const useQueryParameters = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const MoviePage = () => {
  const dispatch = useDispatch();
  const id = useQueryParameters("id");
  const movieData = useSelector(selectMovieInfo);
  const status = useSelector(selectMovieStatus);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, []);

  if (status === "success") {
    const movieDescription = movieData.movieDescription;
    const movieCast = movieData.movieCrew.cast;
    const movieCrew = movieData.movieCrew.crew;

    return (
      <Container>
        {movieDescription.backdrop_path ? (
          <Header
            poster={movieDescription.backdrop_path}
            rate={movieDescription.vote_average}
            title={movieDescription.title}
            voteCount={movieDescription.vote_count}
          />
        ) : null}
        <Content>
          <AboutMovieTile
            poster={movieDescription.poster_path}
            title={movieDescription.title}
            productionCountry={movieDescription.production_countries}
            date={movieDescription.release_date}
            release={movieDescription.release_date}
            genres={movieDescription.genres}
            voteCount={movieDescription.vote_count}
            rate={movieDescription.vote_average}
            overview={movieDescription.overview}
          />
          <Wrapper>
            <Title>Cast</Title>
            <List>
              {movieCast.slice(0, 20).map((actor) => (
                <PersonTile
                  id={actor.id}
                  key={`${actor.id}${actor.character}`}
                  name={actor.name}
                  profile={actor.profile_path}
                  role={actor.character}
                />
              ))}
            </List>
          </Wrapper>
          <Wrapper>
            <Title>Crew</Title>
            <List>
              {movieCrew.slice(0, 10).map((person) => (
                <PersonTile
                  key={`${person.id}${person.job}`}
                  name={person.name}
                  profile={person.profile_path}
                  role={person.job}
                  id={person.id}
                />
              ))}
            </List>
          </Wrapper>
        </Content>
      </Container>
    )
  };
};