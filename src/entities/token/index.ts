export const STORAGE_KEY = 'token';

export const setToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(STORAGE_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(STORAGE_KEY);
};
