import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  page: "",
};

const queriesSlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    setPage: (prevState, { payload: page }) => ({
      ...prevState,
      page,
    }),
    setSearch: (prevState, { payload: search }) => ({
      ...prevState,
      search,
    }),
  },
});

export const { setPage, setSearch } = queriesSlice.actions;

const queriesState = (state) => state.queries;
export const selectSearch = (state) => queriesState(state).search;
export const selectPage = (state) => queriesState(state).page;

export default queriesSlice.reducer;
