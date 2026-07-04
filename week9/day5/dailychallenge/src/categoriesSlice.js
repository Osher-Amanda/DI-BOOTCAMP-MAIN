import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 'cat-1', name: 'Work' },
    { id: 'cat-2', name: 'Personal' },
  ],
  selectedCategoryId: 'cat-1',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.categories.push(action.payload);
      },
      prepare(name) {
        return { payload: { id: nanoid(), name } };
      },
    },
    editCategory(state, action) {
      const { id, name } = action.payload;
      const category = state.categories.find(cat => cat.id === id);
      if (category) {
        category.name = name;
      }
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    },
    setSelectedCategory(state, action) {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { addCategory, editCategory, deleteCategory, setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;