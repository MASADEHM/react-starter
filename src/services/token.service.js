import Cookies from "universal-cookie";

const key = "_cookieEvcx";


export const setCookies = (token) => {
  const cookie = new Cookies();
  cookie.set(key, token, { path: '/' })
}
export const removeCookie = () => {
  const cookie = new Cookies();
  cookie.remove(key)
}
export const getCookie = () => {
  const cookie = new Cookies();
  
  return cookie.get(key);
}