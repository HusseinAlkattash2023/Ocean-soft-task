import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark:false
};

export const changeModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
      changeMode: (state) => {
        state.dark = !state.dark;
      },
    }
});

export const {changeMode} = changeModeSlice.actions;

export default changeModeSlice.reducer;