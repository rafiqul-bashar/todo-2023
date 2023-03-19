import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";
import filtersSlice from "./features/filters/filterSlice";
const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filtersSlice,
  },
});
export default store;
