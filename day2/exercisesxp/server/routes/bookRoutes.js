const express = require('express');
const router = express.Router();

// import your "database" (array)
let books = require('../models/bookModel');

// GET ALL BOOKS
router.get('/', (req, res) => {
  res.json(books);
});

// GET ONE BOOK BY ID
router.get('/:bookId', (req, res) => {
  const id = parseInt(req.params.bookId);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
});

// CREATE NEW BOOK
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

module.exports = router;