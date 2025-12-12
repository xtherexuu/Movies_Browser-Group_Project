// import { createSlice } from "@reduxjs/toolkit";

// const queriesSlice = createSlice({
//   name: "queries",
//   initialState: {
//     search: "",
//     page: "1",
//     searchInputValue: "",
//   },
//   reducers: {
//     setSearch: (previousState, { payload: search }) => ({
//       ...previousState,
//       search,
//     }),
//     setSearchInputValue: (previousState, { payload: searchInputValue }) => ({
//       ...previousState,
//       searchInputValue,
//     }),
//     setPage: (previousState, { payload: page }) => ({
//       ...previousState,
//       page,
//     }),
//     fetchInputValueFromQueries: (
//       previousState,
//       { payload: searchInputValue }
//     ) => ({
//       ...previousState,
//       searchInputValue,
//     }),
//   },
// });

// export const {
//   setPage,
//   setSearch,
//   setSearchInputValue,
//   fetchInputValueFromQueries,
// } = queriesSlice.actions;

// const selectQueriesState = (state) => state.queries;

// export const selectPage = (state) => selectQueriesState(state).page;
// export const selectSearch = (state) => selectQueriesState(state).search;
// export const selectSearchInputValue = (state) =>
//   selectQueriesState(state).searchInputValue;
// export default queriesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  page: "1",
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
