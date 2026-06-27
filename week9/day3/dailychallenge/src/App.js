import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import Calendar from "./Calendar";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>Daily Planner</h1>

        <Calendar />

        <AddTask />

        <TaskList />
      </div>
    </Provider>
  );
}

export default App;