import React from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  deleteTask,
  editTask,
} from "./plannerSlice";

function TaskList() {
  const dispatch = useDispatch();

  const selectedDay = useSelector(
    (state) => state.planner.selectedDay
  );

  const tasks =
    useSelector(
      (state) =>
        state.planner.tasks[selectedDay]
    ) || [];

  const handleEdit = (task) => {
    const newText = prompt(
      "Edit task:",
      task.text
    );

    if (newText) {
      dispatch(
        editTask({
          day: selectedDay,
          id: task.id,
          newText,
        })
      );
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Tasks for {selectedDay}</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            marginBottom: "10px",
          }}
        >
          {task.text}

          <button
            onClick={() =>
              handleEdit(task)
            }
            style={{
              marginLeft: "10px",
            }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              dispatch(
                deleteTask({
                  day: selectedDay,
                  id: task.id,
                })
              )
            }
            style={{
              marginLeft: "10px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;