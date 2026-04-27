const express = require('express');
const router = express.Router();

let books = [];
let id = 1;

// GET all
router.get('/', (req, res) => {
  res.json(books);
});

// CREATE
router.post('/', (req, res) => {
  const newBook = {
    id: id++,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) return res.status(404).send('Not found');

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// DELETE
router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.send('Deleted');
});

module.exports = router;