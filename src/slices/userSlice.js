// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
};

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // User ko state mein set karenge
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;

      // LocalStorage mein bhi user data save karenge
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      // User logout karte waqt state ko reset karenge
      state.name = '';
      state.email = '';
      state.password = '';

      // LocalStorage se user data delete karenge
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;