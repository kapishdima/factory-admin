import { useMutation } from '@tanstack/react-query';
import { Routes } from 'app/router';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUp } from '../api';
import { SignUpRequest } from '../types';

export const useSignUp = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      toast('You have successfully registered', { type: 'success', theme: 'colored' });
      navigate(Routes.SignIn);
    },
    onError: (error: Error) => {
      toast(error.message, { type: 'error', theme: 'colored' });
    },
  });
  const onSubmit = async (data: SignUpRequest) => {
    mutate(data);
  };

  return { onSubmit, isLoading };
};
