import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    orders: JSON.parse(localStorage.getItem("orders")) || [], // Store multiple orders
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); 
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); 
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },

    setOrder: (state, action) => {
      // Append new order to the orders array
      const updatedOrders = [...state.orders, action.payload];
      state.orders = updatedOrders;
      localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Update orders in localStorage
    },
  },
});

export const { addToCart, removeFromCart, setOrder } =
  cartSlice.actions;
export default cartSlice.reducer;
