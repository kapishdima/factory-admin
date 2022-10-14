import { useMutation } from '@tanstack/react-query';
import { Routes } from 'app/router';
import { setToken } from 'entities/token';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signIn } from '../api';
import { SignInRequest, SignInResponse } from '../types';

export const useSignIn = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signIn, {
    onError: (error: Error) => {
      toast(error.message, { type: 'error', theme: 'colored' });
    },
    onSuccess: (data: SignInResponse) => {
      setToken(data.token);
      navigate(Routes.OrderCreation);
    },
  });
  const onSubmit = async (data: SignInRequest) => {
    mutate(data);
  };

  return { onSubmit, isLoading };
};
