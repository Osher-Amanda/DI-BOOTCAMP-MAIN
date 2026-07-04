import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      const { text, categoryId } = action.payload;
      state.todos.push({
        id: Date.now(),
        text,
        categoryId,
        completed: false,
        progress: 0,
      });
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
        todo.progress = todo.completed ? 100 : todo.progress;
      }
    },

    updateTodoProgress: (state, action) => {
      const { id, progress } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.progress = progress;
        todo.completed = progress >= 100;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const {
  addTodo,
  editTodo,
  toggleTodo,
  updateTodoProgress,
  removeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;