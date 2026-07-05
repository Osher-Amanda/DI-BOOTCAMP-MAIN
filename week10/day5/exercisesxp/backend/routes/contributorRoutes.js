const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");

const {
  addContributor,
  getContributorsByStory,
  removeContributor,
} = require("../controllers/contributorController");

router.post("/", authenticateToken, addContributor);
router.get("/:story_id", authenticateToken, getContributorsByStory);
router.delete("/:id", authenticateToken, removeContributor);

module.exports = router;