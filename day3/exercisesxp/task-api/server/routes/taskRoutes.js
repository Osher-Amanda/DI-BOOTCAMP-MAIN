const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

// helper: read file
function readTasks() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// helper: write file
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// GET ALL TASKS
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET TASK BY ID
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
});

// CREATE TASK
router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const tasks = readTasks();

  const newTask = {
    id: tasks.length + 1,
    title
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

// UPDATE TASK
router.put('/:id', (req, res) => {
  const { title } = req.body;
  const tasks = readTasks();

  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  task.title = title;
  writeTasks(tasks);

  res.json(task);
});

// DELETE TASK
router.delete('/:id', (req, res) => {
  let tasks = readTasks();

  const filtered = tasks.filter(t => t.id !== parseInt(req.params.id));

  if (tasks.length === filtered.length) {
    return res.status(404).json({ message: 'Task not found' });
  }

  writeTasks(filtered);

  res.json({ message: 'Task deleted' });
});

module.exports = router;