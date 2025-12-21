import axios from "axios";

const APIbaseURL = "https://api.themoviedb.org/3";
const APIkey = "f4abb2c51d8a72a2554557a4a8c06397";
const APIlanguage = "en_US";
const popularMovies = "/movie/popular";
const popularPeople = "/person/popular";
const searchPerson ="/search/person";
const searchMovie ="/search/movie";

export const imagesAPIw400 = "https://image.tmdb.org/t/p/w400/";
export const imagesAPIw200 = "https://image.tmdb.org/t/p/w200/";

const apiService = axios.create({ baseURL: `${APIbaseURL}` });

export const getPopularMovies = async (page) => {
  try {
    const response = await apiService.get(`${popularMovies}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
          page: `${page}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};

export const getPopularPeople = async (page) => {
  try {
    const response = await apiService.get(`${popularPeople}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
          page: `${page}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};

export const getSearchPerson = async (query, page) => {
  try {
    const response = await apiService.get(`${searchPerson}`,
export const getSearchMovie = async (query, page) => {
  try {
    const response = await apiService.get(`${searchMovie}`,
      {
        params: {
          api_key: `${APIkey}`,
          language: `${APIlanguage}`,
          query: `${query}`,
          page: `${page}`,
        },
      });
    return response.data;
  }
  catch (error) {
    console.error("Error searching person.", error);
    return [];
  }
};
