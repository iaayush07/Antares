// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import workItemsReducer from '../slice';
import titleReducer from '../slice/titleSlice'

export const store = configureStore({
  reducer: {
    workItems: workItemsReducer,
    title: titleReducer
  },
});
