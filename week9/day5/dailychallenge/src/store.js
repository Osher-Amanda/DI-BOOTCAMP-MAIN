import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";
import categoriesReducer from "./categoriesSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    categories: categoriesReducer,
  },
});

export default store;