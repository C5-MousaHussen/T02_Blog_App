import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    id: localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: [],
  },
  reducers: {
    toLogin: (state, action) => {
      state.id = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("id", action.payload);
    },
    toLogout: (state, action) => {
      state.id = "";
      state.isLoggedIn = false;
      localStorage.clear();
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { toLogin, toLogout ,setUser} = auth.actions;
export default auth.reducer;
