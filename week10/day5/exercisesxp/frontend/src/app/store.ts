import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authSlice";
import storiesReducer from "../features/storiesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stories: storiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;