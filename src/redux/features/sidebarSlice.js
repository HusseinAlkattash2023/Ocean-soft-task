import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
  };

  export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
      openSidebar: (state) => {
        state.open = !state.open;
      },
    }
});

export const {openSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;