import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
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

type CartSliceState = {
  totalPrice: number;
  items: CartItem[];
};

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const alreadyIn = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyIn) {
        alreadyIn.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state?.items.reduce(
        (sum, item) => (sum += item.price),
        0
      );
    },

    removeCartItem(state, action) {
      const alreadyIn = state.items.find((item) => item.id === action.payload);

      if (alreadyIn) {
        alreadyIn.count -= 1;
      }

      if ((alreadyIn?.count as number) < 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      state.totalPrice = state?.items.reduce(
        (sum, item) => (sum += item.price),
        0
      );
    },

    clearCartItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state?.items.reduce(
        (sum, item) => (sum += item.price),
        0
      );
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItem, clearCart } =
  cart.actions;

export default cart.reducer;
