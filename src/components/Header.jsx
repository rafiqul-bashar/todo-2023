import React from "react";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  addTodo,
  allCompleted,
  clearCompleted,
} from "../redux/features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const [todoText, setTodoText] = React.useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  const handleAllCompleted = () => {
    dispatch(allCompleted());
  };
  const clearAllCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      <form
        className="bg-gray-100 flex items-center p-2 gap-2"
        onSubmit={addTodoHandler}
      >
        <h5 className="text-2xl">
          <RiTodoLine />
        </h5>
        <input
          className=" w-full p-1 bg-gray-100 focus:outline-none"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Type your todo"
        />
        <button type="submit" className="text-2xl cursor-pointer">
          <AiOutlinePlusCircle />
        </button>
      </form>
      <div className="flex items-center gap-4 p-2 text-xs ml-auto ">
        <button
          onClick={clearAllCompleted}
          className="border border-gray-800 ml-auto p-1 rounded-sm"
        >
          Clear all completed
        </button>
        <button
          onClick={handleAllCompleted}
          className="border border-gray-800 ml-auto p-1 rounded-sm"
        >
          Mark all as completed
        </button>
      </div>
    </>
  );
}
