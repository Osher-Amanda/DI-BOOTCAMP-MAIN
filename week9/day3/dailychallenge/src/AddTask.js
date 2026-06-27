import React, { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { addTask } from "./plannerSlice";

function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const selectedDay = useSelector(
    (state) => state.planner.selectedDay
  );

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        day: selectedDay,
        text,
      })
    );

    setText("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;