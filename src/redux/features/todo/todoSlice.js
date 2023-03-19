import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todos"))
    ? JSON.parse(localStorage.getItem("todos"))
    : [
        {
          id: 2,
          title: "Learn Redux",
          completed: false,
          priority: "Normal",
        },
      ],
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //  Add todo
    addTodo: (state, action) => {
      state.todoList.push({
        id: nextTodoId(state.todoList),
        title: action.payload,
        completed: false,
        priority: "Normal",
      });

      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    //  toggle completed todo
    toggleCompleted: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    // toggle status
    toggleStatus: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          const { priorityStatus } = action.payload;
          todo.priority = priorityStatus;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    // delete todo
    deleteTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          const filteredList = state.todoList.filter(
            (item) => item.id !== todo.id
          );
          state.todoList = filteredList;
        }
        return state;
      });
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    // complete all todo and clear completed
    allCompleted: (state) => {
      state.todoList.map((todo) => {
        todo.completed = !todo.completed;
        // console.log(todo.completed);
      });
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    clearCompleted: (state) => {
      const filtered = state.todoList.filter((todo) => todo.completed !== true);
      state.todoList = filtered;
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
  },
});

export const {
  addTodo,
  toggleCompleted,
  toggleStatus,
  deleteTodo,
  allCompleted,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
