import React from 'react';

import { Input, Spacer, Text } from 'shared/ui';
import { InputAttrs } from '../Input/types';

import './styles.scss';

type PasswordFieldProps = InputAttrs & {
  label: string;
  name: string;
  hint?: string;
};

const PasswordField: React.FC<PasswordFieldProps> = ({ hint, label, ...props }) => {
  const { id = props.name, ...htmlAttrs } = props;

  return (
    <Input {...htmlAttrs}>
      {({ field }) => (
        <div className="text-field">
          <label htmlFor={id} className="text-field__label">
            {label}
          </label>

          <input id={id} type="password" className="text-field__input" {...field} {...htmlAttrs} />
          {hint && <PasswordFieldHint hint={hint} />}
        </div>
      )}
    </Input>
  );
};

const PasswordFieldHint: React.FC<{ hint: string }> = ({ hint }) => {
  return (
    <>
      <Spacer top={2}></Spacer>
      <Text size="sm" color="text-gray-600">
        {hint}
      </Text>
    </>
  );
};

export default PasswordField;
