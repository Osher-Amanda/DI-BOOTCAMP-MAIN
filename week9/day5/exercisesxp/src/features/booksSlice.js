import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Horror",
    },
    {
      id: 2,
      title: "Harry Potter",
      author: "J.K Rowling",
      genre: "Fantasy",
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
    },
    {
      id: 4,
      title: "IT",
      author: "Stephen King",
      genre: "Horror",
    },
    {
      id: 5,
      title: "Lord of the Rings",
      author: "Tolkien",
      genre: "Fantasy",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;