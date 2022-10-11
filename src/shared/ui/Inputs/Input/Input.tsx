import React from 'react';
import { useController, UseControllerReturn, useFormContext } from 'react-hook-form';
import { InputAttrs, TextAreaAttrs } from './types';

type InputChild = (attrs: UseControllerReturn) => JSX.Element;
type InputProps = (InputAttrs | TextAreaAttrs) & {
  children: InputChild;
};

const Input: React.FC<InputProps> = ({ name, children, ...attrs }) => {
  if (!name) {
    throw new Error('Name is required');
  }

  const { control } = useFormContext();
  const inputAttrs = useController({ name, control });

  return children(inputAttrs);
};

export default Input;
