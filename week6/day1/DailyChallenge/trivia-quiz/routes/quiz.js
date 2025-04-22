const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

// GET /quiz – Start the quiz
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: triviaQuestions[currentQuestionIndex].question
  });
});

// POST /quiz – Submit answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer?.trim().toLowerCase();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  let feedback;
  if (userAnswer === correctAnswer) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Wrong! The correct answer was: ${triviaQuestions[currentQuestionIndex].answer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  res.json({
    feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question
  });
});

// GET /quiz/score – Final score
router.get('/score', (req, res) => {
  const result = {
    score: score,
    total: triviaQuestions.length,
    message: `You scored ${score} out of ${triviaQuestions.length}!`
  };

  // Reset for replay
  score = 0;
  currentQuestionIndex = 0;

  res.json(result);
});

module.exports = router;
