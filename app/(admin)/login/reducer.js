import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: null,
  },
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    resetAuthState(state) {
      state.authState = null;
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
