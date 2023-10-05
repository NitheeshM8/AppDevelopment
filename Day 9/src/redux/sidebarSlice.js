<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: true, 
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarState = (state) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: true, 
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarState = (state) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
