const express = require('express');
const app = express();

app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "Hello world" },
  { id: 2, title: "Second Post", content: "Another post" }
];

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET post by id
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
});

// CREATE post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// UPDATE post
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;

  res.json(post);
});

// DELETE post
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.send("Post deleted");
});

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});