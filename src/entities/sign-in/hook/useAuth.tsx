const STORAGE_KEY = 'token';

export const useAuth = () => {
  const setToken = (token: string) => {
    localStorage.setItem(STORAGE_KEY, token);
  };

  const isAuth = () => {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  };

  return {
    setToken,
    isAuth,
  };
};
