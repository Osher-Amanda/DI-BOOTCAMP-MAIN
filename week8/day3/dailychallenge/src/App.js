import React, { useReducer, useRef, useState } from "react";
import "./App.css";

const initialState = {
  tasks: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Study useReducer", completed: true },
  ],
  filter: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const editInputRef = useRef();

  const addTask = () => {
    if (newTask.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setNewTask("");
  };

  const saveEdit = (id) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: id,
        text: editInputRef.current.value,
      },
    });

    setEditingId(null);
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") {
      return task.completed;
    }

    if (state.filter === "active") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <div className="filters">
        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "all",
            })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "completed",
            })
          }
        >
          Completed
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "active",
            })
          }
        >
          Active
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  defaultValue={task.text}
                  ref={editInputRef}
                />

                <button onClick={() => saveEdit(task.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_TASK",
                      payload: task.id,
                    })
                  }
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    cursor: "pointer",
                  }}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => setEditingId(task.id)}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TASK",
                      payload: task.id,
                    })
                  }
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;