import { axiosInstance } from "./axios.interceptor";

export const userService = async () => {
  return await axiosInstance
    .get("https://jsonplaceholder.typicode.com/users")
    .then(d => d)
    .catch(err => { console.log(err) })
}
