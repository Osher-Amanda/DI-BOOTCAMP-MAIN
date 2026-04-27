const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;

// START QUIZ
router.get('/', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;

  res.send({
    question: triviaQuestions[currentQuestionIndex].question
  });
});

// SUBMIT ANSWER
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback = userAnswer === correctAnswer ? "Correct!" : "Wrong!";
  if (userAnswer === correctAnswer) score++;

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.send({
      message: "Quiz finished",
      score: score
    });
  }

  res.send({
    feedback: feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question
  });
});

// SCORE
router.get('/score', (req, res) => {
  res.send({ finalScore: score });
});

module.exports = router;