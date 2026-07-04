import { createSelector } from '@reduxjs/toolkit';

const selectTasksState = (state) => state.todos.todos;
const selectCategoriesState = (state) => state.categories.categories;
const selectCategoryIdParam = (state, categoryId) => categoryId;

// Returns tasks belonging to a specific category
export const selectTasksByCategory = createSelector(
  [selectTasksState, selectCategoryIdParam],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

// Computes the count of completed tasks
export const selectCompletedTasks = createSelector(
  [selectTasksState],
  (tasks) => tasks.filter(task => task.completed).length
);

// Returns category details based on ID
export const selectCategoryById = createSelector(
  [selectCategoriesState, selectCategoryIdParam],
  (categories, categoryId) => categories.find(cat => cat.id === categoryId)
);

export const selectAllCategories = (state) => state.categories.categories;
export const selectSelectedCategoryId = (state) => state.categories.selectedCategoryId;