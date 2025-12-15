import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInputValue: "",
};

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInputValue: (_, { payload: searchInputValue }) => ({
      searchInputValue,
    }),
    fetchSearchInputValueFromQueries: (_, { payload: searchInputValue }) => ({
      searchInputValue,
    }),
  },
});

export const { setSearchInputValue, fetchSearchInputValueFromQueries } =
  searchInputSlice.actions;

export const selectSearchInputValue = (state) =>
  state.searchInput.searchInputValue;

export default searchInputSlice.reducer;
