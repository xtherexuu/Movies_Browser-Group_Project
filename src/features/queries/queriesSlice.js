import { createSlice } from "@reduxjs/toolkit";

const queriesSlice = createSlice({
  name: "queries",
  initialState: {
    search: "",
    page: "",
    searchInputValue: "",
  },
  reducers: {
    setSearch: (previousState, { payload: search }) => ({
      ...previousState,
      search,
    }),
    setSearchInputValue: (previousState, { payload: searchInputValue }) => ({
      ...previousState,
      searchInputValue,
    }),
    setPage: (previousState, { payload: page }) => ({
      ...previousState,
      page,
    }),
  },
});

export const { setPage, setSearch, setSearchInputValue } = queriesSlice.actions;

const selectQueriesState = (state) => state.queries;

export const selectPage = (state) => selectQueriesState(state).page;
export const selectSearch = (state) => selectQueriesState(state).search;
export const selectSearchInputValue = (state) =>
  selectQueriesState(state).searchInputValue;

export default queriesSlice.reducer;
