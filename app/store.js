import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './(admin)/login/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
