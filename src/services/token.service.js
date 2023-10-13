const key = "token";

export const setToken = (Token) => {
  if (Token) {
    localStorage.setItem(key, Token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(key);
};
export const getToken = () => {
  return localStorage.getItem(key);
};
