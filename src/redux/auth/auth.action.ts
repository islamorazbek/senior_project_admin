import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, ILoginResponse, IUser } from "../types/types";
import { AuthService } from "./auth.service";

export const login = createAsyncThunk<ILoginResponse, ILogin>(
    'auth/login',
    async function (creds, { rejectWithValue }) {
        try {
            const response = await AuthService.login(creds);
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const refresh = createAsyncThunk<ILoginResponse>(
    'auth/refresh',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.refresh();
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const logout = createAsyncThunk<ILoginResponse>(
    'auth/logout',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('access_token');
            return response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const fetchUser = createAsyncThunk<IUser>(
    'profile/fetch',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.fetchProfile();
            return response.data;
        } catch (e) {
            localStorage.removeItem('access_token');
            return rejectWithValue(e);
        }
    }
);

export const updatePassword = createAsyncThunk<void, { oldPassword: string, newPassword: string }>(
    'profile/updatePassword',
    async function ({ oldPassword, newPassword }, { rejectWithValue }) {
        try {
            await AuthService.updatePassword(oldPassword, newPassword);
        } catch (e) {
            localStorage.removeItem('access_token');
            return rejectWithValue(e);
        }
    }
)