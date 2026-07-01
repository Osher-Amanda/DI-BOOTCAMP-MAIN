const express = require("express");
const emojis = require("./emojis");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let score = 0;
let leaderboard = [];
let currentEmoji = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
  currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let options = [currentEmoji.name];

  while (options.length < 4) {
    const random =
      emojis[Math.floor(Math.random() * emojis.length)].name;

    if (!options.includes(random)) {
      options.push(random);
    }
  }

  return {
    emoji: currentEmoji.emoji,
    options: shuffle(options),
  };
}

app.get("/emoji", (req, res) => {
  res.json(generateQuestion());
});

app.post("/guess", (req, res) => {
  const guess = req.body.guess;

  if (!guess || typeof guess !== "string") {
    return res.status(400).json({
      correct: false,
      message: "Invalid input",
    });
  }

  const correct = guess === currentEmoji.name;

  if (correct) {
    score++;
  }

  leaderboard.push(score);
  leaderboard.sort((a, b) => b - a);
  leaderboard = leaderboard.slice(0, 5);

  res.json({
    correct,
    score,
    answer: currentEmoji.name,
    leaderboard,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});