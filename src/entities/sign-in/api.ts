import { http } from 'app/http/client';
import { SignInDTO } from './sign-in.dto';

export const signIn = async (payload: SignInDTO) => {
  const { data } = await http.post('users/login', payload);

  return data;
};
