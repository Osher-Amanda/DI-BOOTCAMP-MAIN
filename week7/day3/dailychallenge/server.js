const express = require('express');
const app = express();

// import routes
const userRoutes = require('./server/routes/userRoutes');

// middleware
app.use(express.json());
app.use(express.static('public'));

// routes
app.use('/', userRoutes);

// start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});