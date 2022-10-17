import { object, string } from 'yup';

export const orderInfoSchema = object({
  project_name: string().required(),
});

export const orderConfirmSchema = object({
  project_name: string(),
});
