import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // sets current state to action.payload
    },
    filterItems: (state, action) => {
      if (action.payload.size === "S") {
        console.log(action.payload.items);
        action.payload.items.map((item) => {
          if (item.sizes.includes("S")) return item;
        });
        return state;
      }
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
