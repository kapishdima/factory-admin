import React from 'react';

import { Spacer, Text } from 'shared/ui';

import './styles.scss';

type TextFieldProps = React.HTMLProps<Omit<HTMLInputElement, 'ref'>> & {
  label: string;
  hint?: string;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ hint, label, ...props }, ref) => {
    const { id = props.name, ...htmlAttrs } = props;

    return (
      <div className="text-field">
        <label htmlFor={id} className="text-field__label">
          {label}
        </label>

        <input ref={ref} id={id} type="text" className="text-field__input" {...htmlAttrs} />
        {hint && <TextFieldHint hint={hint} />}
      </div>
    );
  },
);

const TextFieldHint: React.FC<{ hint: string }> = ({ hint }) => {
  return (
    <>
      <Spacer top={2}></Spacer>
      <Text size="sm" color="text-gray-600">
        {hint}
      </Text>
    </>
  );
};

export default TextField;
