import axios from "axios";
import { getCookie } from "./token.service";

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
    console.log('calling interceptor');
    const token = getCookie();
    if (token) {
        config.headers.set("authorization", token)
    }
    return config
}, (err) => {

})
