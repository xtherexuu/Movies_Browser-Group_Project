import { createSlice } from "@reduxjs/toolkit";

const searchPersonSlice = createSlice({
  name: "searchPerson",
  initialState:
  {
    searchData: null,
    status: "initial",
    page: 1,
  },

  reducers: {
    fetchSearchPerson: (_, { payload: { page, query } }) => ({
      status: "loading",
      searchData: null,
      query,
      page
    }),
    fetchSearchPersonSuccess: (_, { payload: searchData }) => ({
      status: "success",
      searchData,
    }),
    fetchSearchPersonError: () => ({
      status: "error",
      searchData: null,
    }),
  },
});

export const {
  fetchSearchPerson,
  fetchSearchPersonSuccess,
  fetchSearchPersonError,
} = searchPersonSlice.actions;

export const selectState = state => state.searchPerson;
export const selectPerson = state => selectState(state).searchData;
export const selectSearchPersonStatus = state => selectState(state).status;

export default searchPersonSlice.reducer; 