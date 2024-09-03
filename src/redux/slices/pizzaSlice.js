import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params) => {
    const { data } = await axios.get(
      "https://66ccaf20a4dd3c8a71b87c41.mockapi.io/Items",
      { params }
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "loading" | "success" | "error",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = initialState.items;
      state.status = "loading";
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = initialState.items;
      state.status = "error";
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
