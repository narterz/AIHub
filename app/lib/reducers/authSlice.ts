import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "@/app/types";

//TODO: Fix the types on line 37 so it reads the whole initial state

const initialState = {
  id: "",
  username: "",
  displayName: "",
  isLoggedIn: false,
  avatarUrl: "",
  createdAt: "",
} as User;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUSername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { setUSername, setDisplayName} = authSlice.actions;
export const authSelector = (state: RootState): User => state.auth;
export default authSlice.reducer;
