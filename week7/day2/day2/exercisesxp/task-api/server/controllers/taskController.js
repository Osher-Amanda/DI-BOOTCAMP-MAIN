const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '..', '..', 'tasks.json');

function readTasks() {
  const data = fs.readFileSync(tasksFilePath, 'utf8');
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function getAllTasks(req, res) {
  try {
    const tasks = readTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read tasks' });
  }
}

function getTaskById(req, res) {
  try {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read tasks' });
  }
}

function createTask(req, res) {
  try {
    const { title, description, completed } = req.body;

    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'A valid title is required' });
    }

    const tasks = readTasks();

    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title,
      description: description || '',
      completed: completed || false
    };

    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create task' });
  }
}

function updateTask(req, res) {
  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const { title, description, completed } = req.body;

    if (title !== undefined && typeof title !== 'string') {
      return res.status(400).json({ error: 'Title must be a string' });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(completed !== undefined && { completed })
    };

    writeTasks(tasks);

    res.status(200).json(tasks[taskIndex]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update task' });
  }
}

function deleteTask(req, res) {
  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    writeTasks(tasks);

    res.status(200).json({ message: 'Task deleted', task: deletedTask[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};