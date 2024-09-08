import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  title: "",
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    setTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setTitle } = filter.actions;

export default filter.reducer;
