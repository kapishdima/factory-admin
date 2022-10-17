import React from 'react';

import { useInput } from '../Input/hook/useInput';
import { InputAttrs } from '../Input/types';
import InputField from '../Input/InputField';

type TextInputProps = InputAttrs & {
  label: string;
  name: string;
  hint?: string;
};

const TextInput: React.FC<TextInputProps> = ({ hint, label, ...props }) => {
  const { id = props.name, type = 'text', ...htmlAttrs } = props;
  const { attrs, classes } = useInput({ name: props.name });

  return (
    <InputField id={id} label={label} hint={hint} errors={attrs.fieldState.error}>
      <input id={id} type={type} className={classes} {...attrs.field} {...htmlAttrs} />
    </InputField>
  );
};

export default TextInput;
