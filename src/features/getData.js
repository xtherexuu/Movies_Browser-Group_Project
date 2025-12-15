import axios from "axios";

const APIbaseURL = "https://api.themoviedb.org/3";
const APIkey = "f4abb2c51d8a72a2554557a4a8c06397";
const APIlanguage = "en_US";
const popularMovies = "/movie/popular";
const popularPeople = "/person/popular";
const movieById = "/movie/"

export const imagesFullApi = "https://image.tmdb.org/t/p";
export const imagesAPIw400 = "https://image.tmdb.org/t/p/w400/";
export const imagesAPIw200 = "https://image.tmdb.org/t/p/w200/";

const apiService = axios.create({ baseURL: `${APIbaseURL}` });

export const getPopularMovies = async () => {
  try {
    const response = await apiService.get(`${popularMovies}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};

export const getPopularPeople = async () => {
  try {
    const response = await apiService.get(`${popularPeople}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching people", error);
    return [];
  }
};

export const getMovieByID = async (id) => {
  try {
    const response = await apiService.get(`${movieById}${id}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movie", error);
    return [];
  }
};

export const getCrewByID = async (id) => {
  try {
    const response = await apiService.get(`${movieById}${id}/credits`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movie crew.", error);
    return [];
  }
};
