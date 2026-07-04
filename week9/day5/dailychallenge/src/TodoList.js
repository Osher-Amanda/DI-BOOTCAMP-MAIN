import React from "react";

import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import {
  selectTasksByCategory,
  selectSelectedCategoryId,
  selectCategoryById,
} from "./selectors";

function TodoList() {
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const todos = useSelector((state) =>
    selectTasksByCategory(state, selectedCategoryId)
  );

  const category = useSelector((state) =>
    selectCategoryById(state, selectedCategoryId)
  );

  return (
    <div>
      <h3>Tasks in {category ? category.name : "Unknown Category"}</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;