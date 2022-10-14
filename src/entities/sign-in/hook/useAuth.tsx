import { getToken } from 'entities/token';

export const useAuth = () => {
  const isAuth = () => {
    return Boolean(getToken());
  };

  return {
    isAuth,
    getToken,
  };
};
