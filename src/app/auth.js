import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isUserLogin: true,
  userRole: null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isUserLogin = true;
      state.userRole = "5555";
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer
