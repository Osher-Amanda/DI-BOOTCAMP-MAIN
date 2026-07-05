import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Story {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string;
  updated_at: string;
}

interface StoriesState {
  stories: Story[];
  loading: boolean;
  error: string | null;
}

const initialState: StoriesState = {
  stories: [],
  loading: false,
  error: null,
};

export const fetchStories = createAsyncThunk(
  "stories/fetchStories",
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/stories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        return rejectWithValue(data.message || "Failed to fetch stories");
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue("Network error while fetching stories");
    }
  }
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setStories } = storiesSlice.actions;

export default storiesSlice.reducer;