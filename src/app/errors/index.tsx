import React from 'react';
import { AxiosError } from 'axios';
import { Navigate, useRouteError } from 'react-router-dom';
import { toast } from 'react-toastify';

import { removeToken } from 'entities/token';
import { Routes } from 'app/router';
import { Container, Heading } from 'shared/ui';

const ErrorBoundary = () => {
  const error = useRouteError() as AxiosError;
  const status = error.response?.status || 500;

  if (status === 401) {
    removeToken();
    toast('User unauthorized!', { type: 'error', theme: 'colored' });
    return <Navigate to={Routes.SignIn} />;
  }

  if (status === 500) {
    return (
      <Container
        width="w-screen"
        height="h-screen"
        display="flex"
        xAlignment="center"
        yAlignment="center">
        <Container display="flex" direction="column">
          <Heading>Something went wrong!</Heading>
        </Container>
      </Container>
    );
  }

  return (
    <Container
      width="w-screen"
      height="h-screen"
      display="flex"
      xAlignment="center"
      yAlignment="center">
      <Container display="flex" direction="column">
        <Heading>Something went wrong!</Heading>
      </Container>
    </Container>
  );
};

export default ErrorBoundary;
