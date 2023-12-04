import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isUserLogin: false,
  userRole: "0000",
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.isUserLogin = true;
      state.userRole = "5555";
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isUserLogin = false;
      state.userRole = "0000";
    },

  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer
