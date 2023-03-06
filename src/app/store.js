import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
const store = configureStore({
  reducers: {
    user: userReducer,
  },
});
export default store;
