import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    isFetchDone: false, // false: "PENDING" or true: "DONE"
    isFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
        return { ...state, isFetchDone: true };
    },
    markFetchStarted: (state) => {
        return { ...state, isFetching: true };
    },
    markFetchFinished: (state) => {
        return { ...state, isFetching: false };
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
