import React from 'react';

import { Input, Spacer, Text } from 'shared/ui';
import { TextAreaAttrs } from '../Input/types';

import './styles.scss';

type TextAreaInputProps = TextAreaAttrs & {
  label: string;
  name: string;
  hint?: string;
  height?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ hint, label, height, ...props }) => {
  const { id = props.name, ...htmlAttrs } = props;

  return (
    <Input {...htmlAttrs}>
      {({ field }) => (
        <div className="text-field h-full" style={{ height }}>
          <label htmlFor={id} className="text-field__label">
            {label}
          </label>

          <textarea id={id} className="text-field__input h-full flex" {...field} {...htmlAttrs} />
          {hint && <TextAreaInputHint hint={hint} />}
        </div>
      )}
    </Input>
  );
};

const TextAreaInputHint: React.FC<{ hint: string }> = ({ hint }) => {
  return (
    <>
      <Spacer top={2}></Spacer>
      <Text size="sm" color="text-gray-600">
        {hint}
      </Text>
    </>
  );
};

export default TextAreaInput;
