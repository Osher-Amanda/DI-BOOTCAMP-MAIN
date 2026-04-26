const express = require('express'); // ✅ THIS WAS MISSING
const app = express();

const quizRoutes = require('./routes/quiz');

app.use(express.json());

app.use('/quiz', quizRoutes);

app.listen(3000, () => {
  console.log("Quiz server running on port 3000");
});