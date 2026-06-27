import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";

import {
  addTask,
  deleteTask,
  editTask,
  setDay,
} from "./actions";

function Planner() {
  const dispatch = useDispatch();

  const selectedDay = useSelector(
    (state) => state.selectedDay
  );

  const tasks = useSelector(
    (state) => state.tasks[selectedDay] || []
  );

  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSubmit = () => {
    if (taskInput.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    if (editIndex !== null) {
      dispatch(
        editTask(selectedDay, editIndex, taskInput)
      );
      setEditIndex(null);
    } else {
      dispatch(addTask(selectedDay, taskInput));
    }

    setTaskInput("");
  };

  const handleEdit = (task, index) => {
    setTaskInput(task);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Daily Planner</h1>

      <select
        value={selectedDay}
        onChange={(e) =>
          dispatch(setDay(e.target.value))
        }
      >
        {days.map((day) => (
          <option key={day}>{day}</option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) =>
            setTaskInput(e.target.value)
          }
        />

        <button onClick={handleSubmit}>
          {editIndex !== null
            ? "Update Task"
            : "Add Task"}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {task}

            <button
              onClick={() =>
                handleEdit(task, index)
              }
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() =>
                dispatch(
                  deleteTask(selectedDay, index)
                )
              }
              style={{ marginLeft: "10px" }}
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
      <Planner />
    </Provider>
  );
}

export default App;