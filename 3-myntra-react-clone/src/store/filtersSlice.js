import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    productSizes: (state, action) => {      
      console.log(state, action);
    },
  },
});

export const filtersActions = filtersSlice.actions

export default filtersSlice;
