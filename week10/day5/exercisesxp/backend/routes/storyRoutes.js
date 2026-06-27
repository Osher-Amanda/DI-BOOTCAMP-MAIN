const express = require("express");
const router = express.Router();

const {
  createStory,
  getStories,
  updateStory,
  deleteStory
} = require("../controllers/storyController");

// TEMP (we will improve auth later if needed)
router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);

module.exports = router;