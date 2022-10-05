import React from 'react';

import { Container, Text } from 'shared/ui';
import { CheckIcon } from 'shared/ui/Icons';
import { getClasses } from './classes';

import { useCheckbox } from './hooks/useCheckbox';

import './styles.scss';

type CheckboxProps = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  checked?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, ...props }) => {
  const { checked: value, onChange } = useCheckbox({ checked });
  const { name, id, width, height, ...htmlAttrs } = props;

  const classes = getClasses({ checked: value || false });

  return (
    <Container
      className={classes}
      display="flex"
      yAlignment="center"
      onClick={onChange}
      {...htmlAttrs}>
      <input
        name={name}
        id={id}
        type="checkbox"
        className="checkbox-input"
        value=""
        onChange={onChange}
      />
      <Container
        width="w-4"
        height="h-4"
        display="flex"
        xAlignment="center"
        yAlignment="center"
        className="checkbox-input__element">
        <CheckIcon width={10} height={10} fill="white" className="checkbox-input__icon" />
      </Container>
      <Text size="sm" weight="500" color="text-gray-700">
        {label}
      </Text>
    </Container>
  );
};

export default Checkbox;
