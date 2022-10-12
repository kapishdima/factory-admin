import React from 'react';

import { useInput } from '../Input/hook/useInput';
import InputField from '../Input/InputField';
import { InputAttrs } from '../Input/types';

import './styles.scss';

type PasswordInputProps = InputAttrs & {
  label: string;
  name: string;
  hint?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ hint, label, ...props }) => {
  const { id = props.name, ...htmlAttrs } = props;
  const { attrs, classes } = useInput({ name: props.name });

  return (
    <InputField id={id} label={label} hint={hint} errors={attrs.fieldState.error}>
      <input id={id} type="password" className={classes} {...attrs.field} {...htmlAttrs} />
    </InputField>
  );
};

export default PasswordInput;
