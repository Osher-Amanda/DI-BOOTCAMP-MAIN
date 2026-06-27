import { createSelector } from "@reduxjs/toolkit";

const selectBooksState = (state) => state.books.books;

export const selectBooks = createSelector(
  [selectBooksState],
  (books) => books
);

export const selectHorrorBooks = createSelector(
  [selectBooksState],
  (books) =>
    books.filter(
      (book) => book.genre === "Horror"
    )
);

export const selectFantasyBooks = createSelector(
  [selectBooksState],
  (books) =>
    books.filter(
      (book) => book.genre === "Fantasy"
    )
);

export const selectScienceFictionBooks =
  createSelector(
    [selectBooksState],
    (books) =>
      books.filter(
        (book) =>
          book.genre === "Science Fiction"
      )
  );