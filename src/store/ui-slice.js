import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isSidebarExpanded: true },
  reducers: {
    toggleExpand: (state) => {
        console.log('asd')
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
