import React from 'react';
import { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { FormChild } from 'shared/ui/Form/Form';

export type InputRef = Pick<UseFormRegisterReturn, 'ref'>;
type InputProps = {
  children: FormChild;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<InputProps> = (props) => {
  const { register, children } = props;

  if (!children.props.name) {
    throw new Error('Input name is required');
  }

  const inputAttrs = register(children.props.name);

  return React.cloneElement(children, { ...inputAttrs });
};

export default Input;
