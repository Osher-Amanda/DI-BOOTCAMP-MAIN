const db = require('../book-api/server/config/db');

const getAllBooks = () => db('books');

const getBookById = (id) =>
    db('books').where({ id }).first();

const createBook = async (book) => {
    const [newBook] = await db('books')
        .insert(book)
        .returning('*');

    return newBook;
};

const updateBook = async (id, book) => {
    const [updatedBook] = await db('books')
        .where({ id })
        .update(book)
        .returning('*');

    return updatedBook;
};

const deleteBook = (id) =>
    db('books').where({ id }).del();

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};