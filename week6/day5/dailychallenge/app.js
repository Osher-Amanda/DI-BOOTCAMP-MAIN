const express = require("express");
const emojis = require("./emojis");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

let currentEmoji = null;
let score = 0;

function generateRound() {
  currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let options = [currentEmoji.name];

  while (options.length < 4) {
    const random =
      emojis[Math.floor(Math.random() * emojis.length)].name;

    if (!options.includes(random)) {
      options.push(random);
    }
  }

  options = options.sort(() => Math.random() - 0.5);

  return { emoji: currentEmoji.emoji, options };
}

app.get("/", (req, res) => {
  const round = generateRound();

  res.send(`
    <h1>Emoji Guessing Game</h1>
    <h2>Score: ${score}</h2>

    <h1 style="font-size:60px">${round.emoji}</h1>

    <form method="POST" action="/guess">
      ${round.options
        .map(
          (opt) => `
            <label>
              <input type="radio" name="guess" value="${opt}" required>
              ${opt}
            </label><br>
          `
        )
        .join("")}

      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/guess", (req, res) => {
  const guess = req.body.guess;

  let message = "";

  if (guess === currentEmoji.name) {
    score++;
    message = "✅ Correct!";
  } else {
    message = `❌ Wrong! It was ${currentEmoji.name}`;
  }

  res.send(`
    <h1>${message}</h1>
    <h2>Score: ${score}</h2>
    <a href="/">Next emoji</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});