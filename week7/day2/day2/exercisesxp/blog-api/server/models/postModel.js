const db = require('../config/db');

const getAllPosts = () => db('posts');

const getPostById = (id) =>
  db('posts').where({ id }).first();

const createPost = async (post) => {
  const [newPost] = await db('posts')
    .insert(post)
    .returning('*');

  return newPost;
};

const updatePost = async (id, post) => {
  const [updated] = await db('posts')
    .where({ id })
    .update(post)
    .returning('*');

  return updated;
};

const deletePost = (id) =>
  db('posts').where({ id }).del();

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};