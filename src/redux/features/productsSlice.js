import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://api.npoint.io/7f71caa40a7ed1346c90");
  const data = await res.json();
  return data;
});

const initialState = {
  isLoading: false,
  data: [],
  error: ""
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getProducts.pending]: (state, action) => {
      state.loading = false;
      state.error = "error";
    }
  }
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;