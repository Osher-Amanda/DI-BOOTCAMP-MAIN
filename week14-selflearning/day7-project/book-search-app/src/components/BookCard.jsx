function BookCard({ book }) {
  const info = book.volumeInfo;

  const image =
    info.imageLinks?.thumbnail ||
    'https://via.placeholder.com/128x190?text=No+Image';

  return (
    <div className="book-card">

      <img src={image} alt={info.title} />

      <h3>{info.title}</h3>

      <p>
        <strong>Author:</strong>{' '}
        {info.authors ? info.authors.join(', ') : 'Unknown'}
      </p>

      <p>
        <strong>Published:</strong>{' '}
        {info.publishedDate || 'N/A'}
      </p>

    </div>
  );
}

export default BookCard;