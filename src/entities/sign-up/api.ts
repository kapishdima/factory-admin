import { http } from 'app/http/client';
import { SignUpRequest } from './types';

export const signUp = async (payload: SignUpRequest) => {
  const { data } = await http.post('users/signup', payload);

  return data;
};
