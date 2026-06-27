import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "./todoSlice";

function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }

    dispatch(addTodo(text));

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;