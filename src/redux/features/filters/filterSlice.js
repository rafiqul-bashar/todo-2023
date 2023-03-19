import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("filters"))
  ? JSON.parse(localStorage.getItem("filters"))
  : {
      status: "All",
      priority: "All",
    };

const filterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeStatusTo: (state, action) => {
      state.status = action.payload;
      localStorage.setItem("filters", JSON.stringify(state));
    },
    priorityFilter: (state, action) => {
      state.priority = action.payload;
      localStorage.setItem("filters", JSON.stringify(state));
    },
  },
});

export const { changeStatusTo, priorityFilter } = filterSlice.actions;

export default filterSlice.reducer;
