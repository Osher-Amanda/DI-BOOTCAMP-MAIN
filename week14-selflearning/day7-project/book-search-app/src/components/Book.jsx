import { useEffect, useState } from 'react';
import BookList from './BookList';

function Book() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('harry potter');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&maxResults=20`
      );

      const data = await response.json();

      if (data.items) {
        const sortedBooks = data.items.sort((a, b) => {
          const yearA = parseInt(a.volumeInfo.publishedDate) || 0;
          const yearB = parseInt(b.volumeInfo.publishedDate) || 0;

          return yearB - yearA;
        });

        setBooks(sortedBooks);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="book-container">

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <BookList books={books} />
      )}

    </div>
  );
}

export default Book;