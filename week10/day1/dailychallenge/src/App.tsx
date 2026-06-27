import React, { useState } from "react";

import List from "./components/List";

type Book = {
  id: number;
  title: string;
  author: string;
};

function App() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K Rowling",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "Tolkien",
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
    },
  ]);

  const addBook = () => {
    const newBook: Book = {
      id: books.length + 1,
      title: `New Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h1>Book List App</h1>

      <button onClick={addBook}>
        Add Book
      </button>

      <List
        items={books}
        renderItem={(book) => (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{book.title}</h2>

            <p>{book.author}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;