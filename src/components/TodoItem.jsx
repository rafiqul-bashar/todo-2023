import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleCompleted,
  toggleStatus,
} from "../redux/features/todo/todoSlice";

const priorities = ["High", "Normal", "Low"];

export default function TodoItem({ todo }) {
  const { id, title, completed, priority } = todo;
  const [priorityStatus, setPriorityStatus] = useState(priority);
  const dispatch = useDispatch();

  const toggleCompleteHandler = () => {
    dispatch(toggleCompleted(id));
  };

  const handlePriorityChange = (e) => {
    dispatch(toggleStatus({ id, priorityStatus: e.target.value }));
  };

  const todoDeleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="grid grid-cols-5 p-2 hover:bg-gray-100 hover:transition-all space-x-2 border-b border-gray-400/20 last:border-0 text-xs sm:text-sm md:text-base">
      <div className="flex items-center col-span-4 ">
        <div
          className={`rounded-full  bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            completed && "border-green-500 focus-within:border-green-500"
          }`}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={toggleCompleteHandler}
            className="opacity-0 absolute rounded-full"
          />
          {completed && (
            <svg
              className="fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
        <h3 className={`capitalize ${completed && "line-through"}`}>{title}</h3>
      </div>
      <div className=" ml-1 flex items-center ">
        <select
          className="text-xs p-1 capitalize"
          value={priority}
          onChange={handlePriorityChange}
        >
          {priorities.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
        <button
          onClick={() => todoDeleteHandler(id)}
          className="  text-2xl text-red-500 ml-3"
        >
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}
