import classNames from 'classnames';
import React from 'react';

import { useInput } from '../Input/hook/useInput';
import InputField from '../Input/InputField';
import { TextAreaAttrs } from '../Input/types';

type TextAreaInputProps = TextAreaAttrs & {
  label: string;
  name: string;
  hint?: string;
  height?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ hint, label, height, ...props }) => {
  const { id = props.name, ...htmlAttrs } = props;
  const { attrs, classes } = useInput({ name: props.name });

  return (
    <InputField id={id} label={label} hint={hint} errors={attrs.fieldState.error}>
      <textarea
        id={id}
        className={classNames(classes, 'h-full flex')}
        {...attrs.field}
        {...htmlAttrs}
      />
    </InputField>
  );
};

export default TextAreaInput;
