import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type FetchPizzasArgs = Record<string, string>;

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchPizzasArgs>(
  "pizza/fetchPizzas",
  async (params: FetchPizzasArgs) => {
    const { data } = await axios.get<PizzaItem[]>(
      "https://66ccaf20a4dd3c8a71b87c41.mockapi.io/Items",
      { params }
    );

    return data;
  }
);

export type PizzaItem = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  description: string;
  count: number;
};

type PizzaSliceState = {
  items: PizzaItem[];
  status: "loading" | "success" | "error";
};

const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
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
