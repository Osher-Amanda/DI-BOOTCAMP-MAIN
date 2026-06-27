import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>Redux Toolkit Todo List</h1>

        <AddTodo />

        <TodoList />
      </div>
    </Provider>
  );
}

export default App;