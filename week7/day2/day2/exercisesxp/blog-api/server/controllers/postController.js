const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
  const posts = await postModel.getAllPosts();
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await postModel.getPostById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
};

const createPost = async (req, res) => {
  const newPost = await postModel.createPost(req.body);
  res.status(201).json(newPost);
};

const updatePost = async (req, res) => {
  const updated = await postModel.updatePost(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(updated);
};

const deletePost = async (req, res) => {
  await postModel.deletePost(req.params.id);
  res.json({ message: 'Post deleted' });
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
};