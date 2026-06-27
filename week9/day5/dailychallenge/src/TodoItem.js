import React from "react";

import { useDispatch } from "react-redux";

import {
  toggleTodo,
  removeTodo,
} from "./todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
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
          dispatch(removeTodo(todo.id))
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;