import React, { useState, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "./todoSlice";
import { selectSelectedCategoryId } from "./selectors";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const handleAdd = useCallback(() => {
    if (text.trim() === "") {
      return;
    }

    dispatch(addTodo({ text, categoryId: selectedCategoryId }));

    setText("");
  }, [dispatch, text, selectedCategoryId]);

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