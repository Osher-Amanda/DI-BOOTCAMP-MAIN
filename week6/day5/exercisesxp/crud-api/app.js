const express = require('express');
const app = express();

const { fetchPosts } = require('./data/dataService');

// route
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data fetched successfully");
    res.json(posts);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});