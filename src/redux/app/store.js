import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";
import changeModeReducer from "../features/changeModeSlice";
import productsRedux from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    mode: changeModeReducer,
    products: productsRedux,
  },
});
