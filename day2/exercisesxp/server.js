const express = require('express');
const app = express();

const postRoutes = require('./server/routes/postRoutes');

app.use(express.json());

app.use('/posts', postRoutes);

// error route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(3000, () => {
  console.log('Blog API running on port 3000');
});