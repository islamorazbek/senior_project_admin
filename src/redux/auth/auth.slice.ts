import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/types";
import { fetchUser, login, logout, refresh, updatePassword } from "./auth.action";

interface IInitState {
    isAuth: boolean;
    user: IUser | null;
    error: unknown;
    loading: boolean;
}

const initialState: IInitState = {
    loading: false,
    user: null,
    error: null,
    isAuth: false
}

const authReducer = createSlice({
    name: 'auth',
    reducers: {},
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.pending, ((state) => {
                state.loading = true
            }))
            .addCase(login.fulfilled, ((state, { payload }) => {
                state.loading = false
                state.isAuth = true
            }))
            .addCase(login.rejected, ((state, { error }) => {
                state.loading = false
                state.error = error
            }))
            .addCase(fetchUser.pending, ((state) => {
                state.loading = true
            }))
            .addCase(fetchUser.fulfilled, ((state, { payload }) => {
                state.loading = false
                state.user = payload
            }))
            .addCase(fetchUser.rejected, ((state, { error }) => {
                state.loading = false
                state.error = error
            }))
            .addCase(refresh.pending, ((state) => {
                state.loading = true
            }))
            .addCase(refresh.fulfilled, ((state, { payload }) => {
                state.loading = false
                state.isAuth = true
            }))
            .addCase(refresh.rejected, ((state, { error }) => {
                state.loading = false
                state.isAuth = false
                state.error = error
            }))
            .addCase(updatePassword.pending, ((state) => {
                state.loading = true
            }))
            .addCase(updatePassword.fulfilled, ((state) => {
                state.loading = false
                state.isAuth = false
            }))
            .addCase(updatePassword.rejected, ((state, { error }) => {
                state.loading = false
                state.error = error
            }))
            .addCase(logout.fulfilled, () => {
                return initialState
            })
            .addCase(logout.rejected, () => {
                return initialState
            })
    }
})
export default authReducer.reducer
