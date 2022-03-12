import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLoggedIn: localStorage.getItem("isLoggedIn") },
  reducers: {
    login: (state, data) => {
      localStorage.setItem("loggedInUser", JSON.stringify(data.payload));
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
