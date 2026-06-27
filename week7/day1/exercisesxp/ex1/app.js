const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Ex1 server running on port 3000');
});