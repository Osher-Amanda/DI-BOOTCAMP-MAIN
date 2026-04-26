const express = require('express');
const app = express();

const taskRoutes = require('./server/routes/taskRoutes');

app.use(express.json());

// routes
app.use('/tasks', taskRoutes);

// error handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(3000, () => {
  console.log('Task API running on port 3000');
});