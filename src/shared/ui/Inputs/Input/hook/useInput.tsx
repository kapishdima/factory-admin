import { useFormContext, useController } from 'react-hook-form';
import { getInputClasses } from '../classes';

type UseInputArgs = {
  name: string;
};

export const useInput = ({ name }: UseInputArgs) => {
  if (!name) {
    throw new Error('Name is required');
  }

  const form = useFormContext();
  const attrs = useController({ name, control: form.control, defaultValue: '' });

  const isValid = !attrs.fieldState.error;

  const classes = getInputClasses({ isValid });

  return { attrs, classes };
};
