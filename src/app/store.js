import rootReducers from "./rootReducers";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: (state, action) => rootReducers(state, action),
});
