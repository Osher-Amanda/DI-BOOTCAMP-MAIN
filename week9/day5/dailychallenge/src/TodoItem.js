import React, { useState, useCallback } from "react";

import { useDispatch } from "react-redux";

import {
  toggleTodo,
  removeTodo,
  editTodo,
} from "./todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleToggle = useCallback(() => {
    dispatch(toggleTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleRemove = useCallback(() => {
    dispatch(removeTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleSaveEdit = useCallback(() => {
    dispatch(editTodo({ id: todo.id, text: editedText }));
    setIsEditing(false);
  }, [dispatch, todo.id, editedText]);

  if (isEditing) {
    return (
      <li style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button onClick={handleSaveEdit}>Save</button>
      </li>
    );
  }

  return (
    <li
      style={{
        marginTop: "10px",
      }}
    >
      <span
        onClick={handleToggle}
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

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
}

export default TodoItem;