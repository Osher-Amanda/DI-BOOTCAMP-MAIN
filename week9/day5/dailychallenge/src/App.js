import React from "react";

import { Provider, useSelector } from "react-redux";

import store from "./store";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import CategorySelector from "./CategorySelector";
import { selectCompletedTasks } from "./selectors";

function AppContent() {
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Redux Toolkit Todo List</h1>

      <p>Completed tasks: {completedCount}</p>

      <CategorySelector />

      <AddTodo />

      <TodoList />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;