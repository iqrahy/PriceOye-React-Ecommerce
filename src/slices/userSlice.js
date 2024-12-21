// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with empty user data
const initialState = {
  name: '',
  email: '',
  password: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    // Action to clear user data (logout)
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
    },
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;