import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../api/api";
import { DataState } from "../types/types";

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export const getRecipes = createAsyncThunk(
  "data/getRecipes",
  async () => {
    const data = await fetchRecipes();
    return data.recipes;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(getRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch recipes";
      });
  },
});

export default dataSlice.reducer;