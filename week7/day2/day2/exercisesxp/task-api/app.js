const express = require('express');
const app = express();

const taskRoutes = require('./server/routes/taskRoutes');

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Task API running on port 3000');
});