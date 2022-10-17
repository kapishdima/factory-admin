import React from 'react';

import { Container, Spacer, Text } from 'shared/ui';
import { AngleDownIcon } from 'shared/ui/Icons';
import { useInput } from '../Input/hook/useInput';
import { getClasses } from './classes';
import { SelectOption, useSelect } from './hook/useSelect';

type SelectProps = React.HTMLProps<HTMLInputElement> & {
  options: SelectOption[];
  label: string;
  name: string;
};

const SelectInput: React.FC<SelectProps> = ({ options, label, ...props }) => {
  const { name, placeholder = 'Select option' } = props;
  const { classes: inputClasses, attrs } = useInput({ name });
  const { selected, opened, onSelectClick, onSelectOptionClick } = useSelect({
    name,
    placeholder,
  });
  const {
    root,
    dropdown,
    option: optionClasses,
    labelColor,
  } = getClasses({
    isValid: Boolean(attrs.fieldState.error),
    opened,
  });

  return (
    <Container display="flex" direction="column" width="w-full">
      <Text size="sm" weight="500" color={labelColor}>
        {label}
      </Text>
      <Spacer bottom={1.5} />
      <Container width="w-full" className={root}>
        <Container
          className={inputClasses}
          width="w-full"
          display="flex"
          xAlignment="justify-between"
          yAlignment="center"
          onClick={onSelectClick}>
          <span>{selected.label}</span>
          <AngleDownIcon width={14} height={14} />
        </Container>
        <Container width="w-full" className={dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={optionClasses}
              onClick={() => onSelectOptionClick(option)}>
              <Text size="sm" color="text-gray-700">
                {option.label}
              </Text>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default SelectInput;
