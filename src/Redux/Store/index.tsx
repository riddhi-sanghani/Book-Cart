import reducer from "../Reducer/index";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: reducer,
});
export { store };
