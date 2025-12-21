import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    peopleDate: null,
    status: "initial",
  },
  reducers: {
    fetchPeople: (_, {payload: page}) => ({
      status: "loading",
      peopleDate: null,
      page
    }),
    fetchPeopleSuccess: (_, { payload: peopleDate }) => ({
      status: "success",
      peopleDate,
    }),
    fetchPeopleError: () => ({
      status: "error",
      peopleDate: null,
    }),
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
} = peopleListSlice.actions;

const selectPeopleListState = state => state.peopleList;

export const selectPeople = state => selectPeopleListState(state).peopleDate;
export const selectPeopleStatus = state => selectPeopleListState(state).status;

export default peopleListSlice.reducer;