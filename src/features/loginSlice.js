import { createSlice } from "@reduxjs/toolkit";

// TODO: login slice delete
const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    setIsLogin(state, action) {
      return action.payload;
    },
  },
});

export const { setIsLogin } = isLoginSlice.actions;
export default isLoginSlice.reducer;
