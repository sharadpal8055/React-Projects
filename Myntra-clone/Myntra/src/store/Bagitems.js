import { createSlice } from "@reduxjs/toolkit";
const bagslice = createSlice({
  name: "bags",

  initialState: [],
  reducers: {
    additemstobag: (state, action) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload.id);
      }
    },
    removeitemsfrombag: (state, action) => {
      return state.filter((id) => id !== action.payload.id);
    },
  },
});
export const bagsaction = bagslice.actions;
export default bagslice;
