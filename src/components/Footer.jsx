import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusTo,
  priorityFilter,
} from "../redux/features/filters/filterSlice";
import { allCompleted } from "../redux/features/todo/todoSlice";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

const priorities = ["All", "High", "Normal", "Low"];
export default function Footer() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todoList);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const filters = useSelector((state) => state.filters);
  const { status, priority } = filters;
  const handlePriority = (e) => {
    dispatch(priorityFilter(e.target.value));
  };

  const handleStatusChange = (status) => {
    dispatch(changeStatusTo(status));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>

      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li>
          Sort by priorities :{" "}
          <select
            className="text-xs p-1 capitalize"
            value={priority}
            onChange={handlePriority}
          >
            {priorities.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
}
