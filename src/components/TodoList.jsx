import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todoList);
  const filters = useSelector((state) => state.filters);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByPriority = (todo) => {
    const { priority } = filters;

    if (todo.priority === priority) {
      return true;
    }
    if (priority == "All") {
      return true;
    }
    return false;
  };

  return (
    <div className="">
      {todos
        ?.filter(filterByStatus)
        .filter(filterByPriority)
        .map((todo, i) => (
          <TodoItem key={i} todo={todo} />
        ))}
      {todos.length === 0 && (
        <h3 className="text-center">
          Add your task and click on the plus button to get started.
        </h3>
      )}
    </div>
  );
}
