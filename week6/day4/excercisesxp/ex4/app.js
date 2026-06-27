const TodoList = require("./todo");

const myTodos = new TodoList();

myTodos.addTask("Learn Node");
myTodos.addTask("Practice JS");

myTodos.markComplete("Learn Node");

console.log(myTodos.listTasks());