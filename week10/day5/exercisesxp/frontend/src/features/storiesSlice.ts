import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stories: [],
  loading: false,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action) => {
      state.stories = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setStories, setLoading } = storiesSlice.actions;

export default storiesSlice.reducer;