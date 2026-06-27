export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const SET_DAY = "SET_DAY";

export const addTask = (day, task) => {
  return {
    type: ADD_TASK,
    payload: { day, task },
  };
};

export const deleteTask = (day, index) => {
  return {
    type: DELETE_TASK,
    payload: { day, index },
  };
};

export const editTask = (day, index, newTask) => {
  return {
    type: EDIT_TASK,
    payload: { day, index, newTask },
  };
};

export const setDay = (day) => {
  return {
    type: SET_DAY,
    payload: day,
  };
};