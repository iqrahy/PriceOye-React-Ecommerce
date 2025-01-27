import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    orders: JSON.parse(localStorage.getItem("orders")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    setOrder: (state, action) => {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

      const updatedOrders = [...existingOrders, action.payload];

      state.orders = updatedOrders;
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, setOrder, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
