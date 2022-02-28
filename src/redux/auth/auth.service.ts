import axios, { AxiosResponse } from "axios";
import $api, { API_URL } from '../../api';
import { ILogin, ILoginResponse, IUser } from "../types/types";

export class AuthService {
    static async login(creds: ILogin): Promise<AxiosResponse<ILoginResponse>> {
        return $api.post<ILoginResponse>(`auth/login`, creds)
    }
    static async refresh(): Promise<AxiosResponse<ILoginResponse>> {
        return axios.get<ILoginResponse>(`${API_URL}auth/refresh`, { withCredentials: true })
    }
    static async logout(): Promise<AxiosResponse<any>> {
        return axios.get<any>(`${API_URL}auth/logout`, { withCredentials: true })
    }
    static async fetchProfile(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`profile/my`)
    }
    static async resetVerify(oldPassword: string, newPassword: string): Promise<void> {
        return $api.put(`user/password`, { oldPassword, newPassword })
    }
    static async resetSubmit(oldPassword: string, newPassword: string): Promise<void> {
        return $api.put(`user/password`, { oldPassword, newPassword })
    }
    static async updatePassword(oldPassword: string, newPassword: string): Promise<void> {
        return $api.put(`user/password`, { oldPassword, newPassword })
    }
}