import { object, string } from 'yup';

export const signUpSchema = object({
  name: string().required(),
  email: string().email().required(),
  mobile_no: string().required(),
  password: string().min(8).required(),
  user_type: string().required(),
});
