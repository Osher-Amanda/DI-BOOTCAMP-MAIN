const emojiElement = document.getElementById("emoji");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const leaderboardElement = document.getElementById("leaderboard");

async function loadEmoji() {
  const response = await fetch("/emoji");
  const data = await response.json();

  emojiElement.textContent = data.emoji;

  optionsElement.innerHTML = "";

  data.options.forEach((option) => {
    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", () => submitGuess(option));

    optionsElement.appendChild(button);
  });
}

async function submitGuess(guess) {
  const response = await fetch("/guess", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      guess,
    }),
  });

  const data = await response.json();

  scoreElement.textContent = `Score: ${data.score}`;

  if (data.correct) {
    resultElement.textContent = "✅ Correct!";
  } else {
    resultElement.textContent = `❌ Wrong! Correct answer: ${data.answer}`;
  }

  leaderboardElement.innerHTML = "";

  data.leaderboard.forEach((score) => {
    const li = document.createElement("li");
    li.textContent = score;
    leaderboardElement.appendChild(li);
  });

  loadEmoji();
}

loadEmoji();