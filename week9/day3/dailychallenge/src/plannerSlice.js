import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDay: "2026-05-10",
  tasks: {},
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,

  reducers: {
    setDay: (state, action) => {
      state.selectedDay = action.payload;
    },

    addTask: (state, action) => {
      const { day, text } = action.payload;

      if (!state.tasks[day]) {
        state.tasks[day] = [];
      }

      state.tasks[day].push({
        id: Date.now(),
        text,
      });
    },

    editTask: (state, action) => {
      const { day, id, newText } = action.payload;

      const task = state.tasks[day].find(
        (task) => task.id === id
      );

      if (task) {
        task.text = newText;
      }
    },

    deleteTask: (state, action) => {
      const { day, id } = action.payload;

      state.tasks[day] = state.tasks[day].filter(
        (task) => task.id !== id
      );
    },
  },
});

export const {
  setDay,
  addTask,
  editTask,
  deleteTask,
} = plannerSlice.actions;

export default plannerSlice.reducer;