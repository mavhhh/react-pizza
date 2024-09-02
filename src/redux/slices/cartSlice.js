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

      console.log(state.items);
      state.totalPrice += action.payload.price;
    },

    removeItem(state, action) {
      const alreadyIn = state.items.find((item) => item.id === action.payload);

      if (alreadyIn) {
        alreadyIn.count -= 1;
      }

      if (alreadyIn?.count < 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    clearItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, clearCart } = cart.actions;

export default cart.reducer;
