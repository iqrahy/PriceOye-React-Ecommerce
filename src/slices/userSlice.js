import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;

      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';

      localStorage.removeItem('user');
    },
    updateUserName: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser, logout, updateUserName } = userSlice.actions;
export default userSlice.reducer;