import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Path to your slice

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch

export default store;
