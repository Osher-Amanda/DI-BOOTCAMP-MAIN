const express = require('express');
const app = express();

const booksRouter = require('./routes/books');

app.use(express.json());
app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log('Ex3 server running on port 3000');
});