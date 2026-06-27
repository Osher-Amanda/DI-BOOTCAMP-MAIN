import React, { useState } from "react";

import {
  Provider,
  useDispatch,
  useSelector,
} from "react-redux";

import store from "./store";

import {
  addTodo,
  toggleTodo,
  deleteTodo,
} from "./actions";
function TodoApp() {
  const [input, setInput] = useState("");

  const todos = useSelector(
    (state) => state.todos
  );

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() === "") {
      return;
    }

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginTop: "10px",
            }}
          >
            <span
              onClick={() =>
                dispatch(toggleTodo(todo.id))
              }
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch(deleteTodo(todo.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;