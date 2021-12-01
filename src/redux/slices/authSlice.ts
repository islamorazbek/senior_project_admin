import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rejects } from "assert";
import { getPositionOfLineAndCharacter } from "typescript";
import { ILoginResponse, IUser } from "../types/types";

interface initialStateType {
  user: IUser | null
  access_token: string | null
  refresh_token: string | null
}
const initialState: initialStateType = {
  user: null,
  access_token: null,
  refresh_token: null
}
const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    setTokens: (state, { payload }: PayloadAction<ILoginResponse>) => {
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
  }
})

export const { setUser, setTokens } = authSlice.actions;
export default authSlice.reducer