import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { signUp } from '../api';
import { SignUpDTO } from '../sign-up.dto';

export const useSignUp = () => {
  const { mutate } = useMutation(signUp, {
    onError: (error: any) => {
      toast(error.message, { type: 'error', theme: 'colored' });
    },
  });
  const onSubmit = async (values: SignUpDTO) => {
    mutate(values);
  };

  return { onSubmit };
};
