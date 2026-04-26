const express = require('express');
const router = express.Router();

let todos = [];
let id = 1;

// GET all
router.get('/', (req, res) => {
  res.json(todos);
});

// CREATE
router.post('/', (req, res) => {
  const newTodo = {
    id: id++,
    task: req.body.task
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE
router.put('/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) return res.status(404).send('Not found');

  todo.task = req.body.task;
  res.json(todo);
});

// DELETE
router.delete('/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.send('Deleted');
});

module.exports = router;