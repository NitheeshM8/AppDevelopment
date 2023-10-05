<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userType: 'ins', 
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.email;
      state.userType = action.payload.userType; 
    },
    logout: (state) => {
      state.user = null;
      state.userType = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserType = (state) => state.user.userType; 
export default userSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userType: 'ins', 
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.email;
      state.userType = action.payload.userType; 
    },
    logout: (state) => {
      state.user = null;
      state.userType = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserType = (state) => state.user.userType; 
export default userSlice.reducer;
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
