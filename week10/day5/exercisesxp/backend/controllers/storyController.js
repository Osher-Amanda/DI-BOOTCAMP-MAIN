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
    res.status(500).json({ message: "Something went wrong creating the story" });
  }
};

// GET ALL STORIES
const getStories = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM stories");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong fetching stories" });
  }
};

// UPDATE STORY
const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.userId;

    const storyResult = await db.query(
      "SELECT * FROM stories WHERE id = $1",
      [id]
    );

    if (storyResult.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    const story = storyResult.rows[0];

    const contributorsResult = await db.query(
      "SELECT * FROM contributors WHERE story_id = $1 AND user_id = $2",
      [id, userId]
    );

    const isAuthor = story.author_id === userId;
    const isContributor = contributorsResult.rows.length > 0;

    if (!isAuthor && !isContributor) {
      return res.status(403).json({ message: "You are not authorized to edit this story" });
    }

    const result = await db.query(
      "UPDATE stories SET title=$1, content=$2, updated_at=CURRENT_TIMESTAMP WHERE id=$3 RETURNING *",
      [title, content, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong updating the story" });
  }
};

// DELETE STORY
const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const storyResult = await db.query(
      "SELECT * FROM stories WHERE id = $1",
      [id]
    );

    if (storyResult.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    const story = storyResult.rows[0];

    if (story.author_id !== userId) {
      return res.status(403).json({ message: "Only the author can delete this story" });
    }

    await db.query("DELETE FROM stories WHERE id=$1", [id]);

    res.json({ message: "Story deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong deleting the story" });
  }
};

module.exports = {
  createStory,
  getStories,
  updateStory,
  deleteStory
};