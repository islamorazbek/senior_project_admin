import axios from "axios";
import { AuthService } from "../redux/auth/auth.service";

export const API_URL = 'https://one-aviation.herokuapp.com/api/v1/';

export const $api = axios.create({
    baseURL: API_URL,
    // withCredentials: true
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');

    if (config && config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

$api.interceptors.response.use(config => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
         try {
            const response = await AuthService.refresh();
            localStorage.setItem('access_token', response.data.access_token)
            return $api.request(originalRequest)
        } catch (e) {
            console.log("User not authorized")
        }
    }
    throw error
})

export default $api