import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLoggedIn: localStorage.getItem("isLoggedIn") },
  reducers: {
    login: (state) => {
      localStorage.setItem("isLoggedIn", true);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
