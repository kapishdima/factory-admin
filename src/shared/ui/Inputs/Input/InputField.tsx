import React from 'react';
import { FieldError } from 'react-hook-form';
import { Spacer, Text } from 'shared/ui';
import { getClasses } from './classes';

type InputFieldProps = {
  id: string;
  label?: string;
  hint?: string;
  errors?: FieldError;
  children: JSX.Element;
};

const InputField: React.FC<InputFieldProps> = ({ id, label, hint, errors, children }) => {
  const classes = getClasses();

  return (
    <div className={classes.container}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      {children}
      {hint && (
        <>
          <Spacer top={2}></Spacer>
          <Text size="sm" color="text-gray-600">
            {hint}
          </Text>
        </>
      )}
      {errors && (
        <>
          <Spacer top={2}></Spacer>
          <Text size="sm" color="text-gray-600">
            {errors.message}
          </Text>
        </>
      )}
    </div>
  );
};

export default InputField;
