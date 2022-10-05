import { http } from 'app/http/client';
import { SignUpDTO } from './sign-up.dto';

export const signUp = async (payload: SignUpDTO) => {
  const { data } = await http.post('users/signup', payload);

  return data;
};
