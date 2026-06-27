import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    return data;
  }
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    userData: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })

      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user";
      });
  },
});

export default userSlice.reducer;