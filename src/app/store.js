import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import isLoginReducer from "../features/loginSlice";
import dataReducer from "../features/dataSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    isLogin: isLoginReducer,
    data: dataReducer,
  },
});
export default store;
