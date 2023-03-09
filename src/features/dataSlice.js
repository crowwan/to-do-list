import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../data/dummyData";

const dataSlice = createSlice({
  name: "isLogin",
  initialState: dummyData,
  reducers: {
    addData(state, action) {
      console.log(action.payload);
      return [...state, { ...action.payload }];
    },
    updateData(state, action) {
      const ind = state.findIndex((a) => a.id === action.payload.id);

      return [...state.slice(0, ind), action.payload, ...state.slice(ind + 1)];
    },
    removeData(state, action) {
      return state.filter((a) => a.id !== action.payload.id);
    },
  },
});

export const { addData, updateData, removeData } = dataSlice.actions;
export default dataSlice.reducer;
