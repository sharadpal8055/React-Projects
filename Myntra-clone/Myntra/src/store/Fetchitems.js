import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchdone: false,
    currentlyfetching: false,
  },
  reducers: {
    markfetchdone: (state) => {
      state.fetchdone = true;
    },
    markfetchstart: (state) => {
      
      state.currentlyfetching = true;
    
    },
    markfetchend: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice;
