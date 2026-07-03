const bookModel = require('../../../models/bookModel');

const getBooks = async (req, res) => {
    const books = await bookModel.getAllBooks();
    res.json(books);
};

const getBook = async (req, res) => {
    const book = await bookModel.getBookById(req.params.bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
};

const createBook = async (req, res) => {
    const book = await bookModel.createBook(req.body);
    res.status(201).json(book);
};

const updateBook = async (req, res) => {
    const book = await bookModel.updateBook(req.params.bookId, req.body);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
};

const deleteBook = async (req, res) => {
    await bookModel.deleteBook(req.params.bookId);
    res.json({ message: 'Book deleted' });
};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};