import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import isLoginReducer from "../features/loginSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    isLogin: isLoginReducer,
  },
});
export default store;
