const db = require("../db/db");

// ADD CONTRIBUTOR
const addContributor = async (req, res) => {
  try {
    const { story_id, user_id } = req.body;
    const requesterId = req.user.userId;

    if (!story_id || !user_id) {
      return res.status(400).json({ message: "story_id and user_id are required" });
    }

    const storyResult = await db.query(
      "SELECT * FROM stories WHERE id = $1",
      [story_id]
    );

    if (storyResult.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    const story = storyResult.rows[0];

    if (story.author_id !== requesterId) {
      return res.status(403).json({ message: "Only the author can add contributors" });
    }

    const result = await db.query(
      "INSERT INTO contributors (story_id, user_id) VALUES ($1, $2) RETURNING *",
      [story_id, user_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong adding the contributor" });
  }
};

// GET CONTRIBUTORS FOR A STORY
const getContributorsByStory = async (req, res) => {
  try {
    const { story_id } = req.params;

    const result = await db.query(
      `SELECT contributors.id, contributors.user_id, users.username, users.email
       FROM contributors
       JOIN users ON contributors.user_id = users.id
       WHERE contributors.story_id = $1`,
      [story_id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong fetching contributors" });
  }
};

// REMOVE CONTRIBUTOR
const removeContributor = async (req, res) => {
  try {
    const { id } = req.params;
    const requesterId = req.user.userId;

    const contributorResult = await db.query(
      "SELECT * FROM contributors WHERE id = $1",
      [id]
    );

    if (contributorResult.rows.length === 0) {
      return res.status(404).json({ message: "Contributor not found" });
    }

    const contributor = contributorResult.rows[0];

    const storyResult = await db.query(
      "SELECT * FROM stories WHERE id = $1",
      [contributor.story_id]
    );

    if (storyResult.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    const story = storyResult.rows[0];

    if (story.author_id !== requesterId) {
      return res.status(403).json({ message: "Only the author can remove contributors" });
    }

    await db.query("DELETE FROM contributors WHERE id = $1", [id]);

    res.json({ message: "Contributor removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong removing the contributor" });
  }
};

module.exports = {
  addContributor,
  getContributorsByStory,
  removeContributor,
};