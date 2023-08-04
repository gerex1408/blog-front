import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: null,
  },
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
      const { access_token, refresh_token } = action.payload;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    },
    resetAuthState(state) {
      state.authState = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
