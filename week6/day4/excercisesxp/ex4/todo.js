class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, done: false });
  }

  completeTask(taskName) {
    const task = this.tasks.find(t => t.task === taskName);
    if (task) task.done = true;
  }

  listTasks() {
    console.log(this.tasks);
  }
}

module.exports = TodoList;