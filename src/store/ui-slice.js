import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isSidebarExpanded: true, isShowLoading: false },
  reducers: {
    toggleExpand: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
    setLoading: (state, data) => {
      state.isShowLoading = data.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
