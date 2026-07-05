const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");

const {
  createStory,
  getStories,
  updateStory,
  deleteStory
} = require("../controllers/storyController");

router.get("/", authenticateToken, getStories);
router.post("/", authenticateToken, createStory);
router.patch("/:id", authenticateToken, updateStory);
router.delete("/:id", authenticateToken, deleteStory);

module.exports = router;