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
      const checkoutDate = new Date().toISOString();
    
      const orderWithDate = {
        ...action.payload,
        checkoutDate,
      };
    
      state.orders.push(orderWithDate);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },
    removeFromOrders: (state, action) => {
      state.orders = state.orders
        .map((order) => ({
          ...order,
          items: order.items.filter((item) => item.id !== action.payload.id),
        }))
        .filter((order) => order.items.length > 0); 
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setOrder,
  clearCart,
  removeFromOrders,
} = cartSlice.actions;
export default cartSlice.reducer;
