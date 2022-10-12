import { http } from 'app/http/client';
import { SignInRequest, SignInResponse } from './types';

export const signIn = async (payload: SignInRequest) => {
  const { data } = await http.post<SignInResponse>('users/login', payload);

  return data;
};
