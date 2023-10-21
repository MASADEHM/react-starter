import axios from "axios";
import { getCookie } from "./services/token.service";

export const Interceptor = axios.interceptors.request.use(async (config) => {
    console.log('call interceptor');
    const key = getCookie();
    console.log(key)
    return config;

}, (err) => {
    console.log(err)
});
