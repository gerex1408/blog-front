import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showToast: null,
  },
  reducers: {
    showToast(state, action) {
      state.showToast = { duration: 3000, ...action.payload };
    },
    hideToast(state) {
      state.showToast = null;
    },
  },
});

export const actions = appSlice.actions;
export default appSlice.reducer;
