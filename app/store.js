import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './(admin)/login/reducer';
import appReducer from './reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
