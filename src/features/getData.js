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

// fetch
//
//export const getPopularMovies = async () => {
//  try {
//    const response = await fetch(`${APIbaseURL}/movie/popular?api_key=${APIkey}&language=en-US`);
//    if (!response.ok) {
//      throw new Error("An error occurred while searching movies.");
//    }
//    const data = await response.json();
//    return data;
//  } catch (error) {
//    console.error(error);
//  }
//};
