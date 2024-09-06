import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
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

    removeItem(state, action) {
      const alreadyIn = state.items.find((item) => item.id === action.payload);

      if (alreadyIn) {
        alreadyIn.count -= 1;
      }

      if (alreadyIn?.count < 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      state.totalPrice = state?.items.reduce(
        (sum, item) => (sum += item.price),
        0
      );
    },

    clearItem(state, action) {
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

export const { addItem, removeItem, clearItem, clearCart } = cart.actions;

export default cart.reducer;
