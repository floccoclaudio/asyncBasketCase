import { combineReducers } from "@reduxjs/toolkit";
import itemSliceReducers from "../features/itemListSlice";

const rootReducers = combineReducers({
  itemsData: itemSliceReducers,
});

export default rootReducers;
