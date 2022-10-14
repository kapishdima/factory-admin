import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'entities/sign-in';
import { removeToken } from 'entities/token';
import { Routes } from './routes';

export const Protected: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth()) {
    removeToken();
    return <Navigate to={Routes.SignIn} />;
  }

  return <>{children}</>;
};
