const db = require("../db/db");

// CREATE STORY
const createStory = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.userId;

    if (!title || !content) {
      return res.status(400).json({ message: "All fields required" });
    }

    const result = await db.query(
      "INSERT INTO stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, userId]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// GET ALL STORIES
const getStories = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM stories");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// UPDATE STORY
const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await db.query(
      "UPDATE stories SET title=$1, content=$2 WHERE id=$3 RETURNING *",
      [title, content, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// DELETE STORY
const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM stories WHERE id=$1", [id]);

    res.json({ message: "Story deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createStory,
  getStories,
  updateStory,
  deleteStory
};