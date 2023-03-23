import { createSlice } from "@reduxjs/toolkit";


export const tokenSlice = createSlice({
  name: "token",
  initialState: { token: null },
  reducers: {
    stetToken: (state, { payload }) => {
      state.token = payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { stetToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
