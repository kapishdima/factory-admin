import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { signIn } from '../api';
import { SignInRequest, SignInResponse } from '../types';
import { useAuth } from './useAuth';

export const useSignIn = () => {
  const { setToken } = useAuth();
  const { mutate, isLoading } = useMutation(signIn, {
    onError: (error: Error) => {
      toast(error.message, { type: 'error', theme: 'colored' });
    },
    onSuccess: (data: SignInResponse) => {
      setToken(data.token);
    },
  });
  const onSubmit = async (data: SignInRequest) => {
    mutate(data);
  };

  return { onSubmit, isLoading };
};
