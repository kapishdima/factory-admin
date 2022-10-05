import React from 'react';

import { Spacer, Text } from 'shared/ui';

import './styles.scss';

type PasswordFieldProps = React.HTMLProps<Omit<HTMLInputElement, 'ref'>> & {
  label: string;
  hint?: string;
};

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ hint, label, ...props }, ref) => {
    const { id = props.name, ...htmlAttrs } = props;

    return (
      <div className="text-field">
        <label htmlFor={id} className="text-field__label">
          {label}
        </label>

        <input ref={ref} id={id} type="password" className="text-field__input" {...htmlAttrs} />
        {hint && <PasswordFieldHint hint={hint} />}
      </div>
    );
  },
);

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
