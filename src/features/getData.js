import axios from "axios";

const APIbaseURL = "https://api.themoviedb.org/3";
const APIkey = "f4abb2c51d8a72a2554557a4a8c06397";
const APIlanguage = "en_US";
const popularMovies = "/movie/popular";
const popularPeople = "/person/popular";

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
    console.error("Error fetching movies", error);
    return [];
  }
};
