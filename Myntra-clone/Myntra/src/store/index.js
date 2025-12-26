import { configureStore } from "@reduxjs/toolkit";
import itemsslice from "./items";
import fetchSlice from "./Fetchitems";
import bagslice from "./Bagitems";

const itemsstore=configureStore({
  reducer:
  {items:itemsslice.reducer,
    fetchStatus:fetchSlice.reducer,
    bags:bagslice.reducer
  }
})
export default itemsstore;