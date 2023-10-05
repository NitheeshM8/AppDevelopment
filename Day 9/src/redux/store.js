<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer, 
  },
});
=======
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer, 
  },
});
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
