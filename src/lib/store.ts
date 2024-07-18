import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      userReducer
    }
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
