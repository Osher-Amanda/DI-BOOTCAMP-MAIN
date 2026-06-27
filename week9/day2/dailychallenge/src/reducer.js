import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_DAY,
} from "./actions";

const savedTasks =
  JSON.parse(localStorage.getItem("plannerTasks")) || {};

const initialState = {
  selectedDay: "Monday",
  tasks: savedTasks,
};

const reducer = (state = initialState, action) => {
  let updatedTasks;

  switch (action.type) {
    case ADD_TASK:
      updatedTasks = {
        ...state.tasks,
        [action.payload.day]: [
          ...(state.tasks[action.payload.day] || []),
          action.payload.task,
        ],
      };

      localStorage.setItem(
        "plannerTasks",
        JSON.stringify(updatedTasks)
      );

      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      updatedTasks = {
        ...state.tasks,
        [action.payload.day]: state.tasks[
          action.payload.day
        ].filter((_, i) => i !== action.payload.index),
      };

      localStorage.setItem(
        "plannerTasks",
        JSON.stringify(updatedTasks)
      );

      return {
        ...state,
        tasks: updatedTasks,
      };

    case EDIT_TASK:
      updatedTasks = {
        ...state.tasks,
        [action.payload.day]: state.tasks[
          action.payload.day
        ].map((task, i) =>
          i === action.payload.index
            ? action.payload.newTask
            : task
        ),
      };

      localStorage.setItem(
        "plannerTasks",
        JSON.stringify(updatedTasks)
      );

      return {
        ...state,
        tasks: updatedTasks,
      };

    case SET_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;