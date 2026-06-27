import React, { useState } from "react";

import { useSelector } from "react-redux";

import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../selectors/booksSelectors";

function BookList() {
  const [genre, setGenre] = useState("All");

  const allBooks = useSelector(selectBooks);

  const horrorBooks = useSelector(
    selectHorrorBooks
  );

  const fantasyBooks = useSelector(
    selectFantasyBooks
  );

  const scienceBooks = useSelector(
    selectScienceFictionBooks
  );

  let booksToDisplay = allBooks;

  if (genre === "Horror") {
    booksToDisplay = horrorBooks;
  }

  if (genre === "Fantasy") {
    booksToDisplay = fantasyBooks;
  }

  if (genre === "Science Fiction") {
    booksToDisplay = scienceBooks;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Book Inventory</h1>

      <button
        onClick={() => setGenre("All")}
      >
        All
      </button>

      <button
        onClick={() => setGenre("Horror")}
      >
        Horror
      </button>

      <button
        onClick={() => setGenre("Fantasy")}
      >
        Fantasy
      </button>

      <button
        onClick={() =>
          setGenre("Science Fiction")
        }
      >
        Science Fiction
      </button>

      <h2>{genre} Books</h2>

      {booksToDisplay.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{book.title}</h3>

          <p>Author: {book.author}</p>

          <p>Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;