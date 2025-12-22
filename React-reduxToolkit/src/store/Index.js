import { configureStore, createSlice } from "@reduxjs/toolkit";
const countslice = createSlice({
  name: "count",
  initialState: { countval: 0 },
  reducers: {
    increment: (state, action) => {
      state.countval++;
    },
    decrement: (state, action) => {
      state.countval--;
    },
    add: (state, action) => {
      state.countval += Number(action.payload);
    },
    subtract: (state, action) => {
      state.countval -= Number(action.payload);
    },
  },
});
const privacyslice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});


const store = configureStore({
  reducer: { count: countslice.reducer, privacy: privacyslice.reducer },
});
export default store;
export const countactions = countslice.actions;
export const privacyactions = privacyslice.actions;
