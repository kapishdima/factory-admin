import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { signIn } from '../api';
import { SignInDTO } from '../sign-in.dto';

export const useSignIn = () => {
  const { mutate } = useMutation(signIn, {
    onError: (error: any) => {
      toast(error.message, { type: 'error', theme: 'colored' });
    },
  });
  const onSubmit = async (values: SignInDTO) => {
    mutate(values);
  };

  return { onSubmit };
};