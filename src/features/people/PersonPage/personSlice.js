import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personId: null,
  personDetails: {
    name: null,
    birthDate: null,
    birthPlace: null,
    biography: null,
    imageUrl: null,
    cast: [],
    crew: [],
  },
  fetchStatus: "init",
};

const personSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {
    setPersonDetails: (previousSate, { payload }) => ({
      ...previousSate,
      personDetails: { ...payload },
    }),
    fetchPersonData: (previousSate, { payload }) => ({
      ...previousSate,
      fetchStatus: "loading",
      personId: payload,
    }),
    setFetchStatus: (previousState, { payload }) => ({
      ...previousState,
      fetchStatus: payload,
    }),
  },
});

export const { setPersonDetails, fetchPersonData, setFetchStatus } =
  personSlice.actions;

export const selectPerson = (state) => state.personDetails;

export const selectPersonDetails = (state) => selectPerson(state).personDetails;
export const selectPersonFetchStatus = (state) =>
  selectPerson(state).fetchStatus;
export const selectPersonId = (state) => selectPerson(state).personId;

export default personSlice.reducer;
