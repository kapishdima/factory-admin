import classNames from 'classnames';
import React from 'react';

import { Container, Spacer, Text } from 'shared/ui';
import { AngleDownIcon } from 'shared/ui/Icons';
import { SelectOption, useSelect } from './hook/useSelect';

import './style.scss';

type SelectProps = React.HTMLProps<HTMLInputElement> & {
  options: SelectOption[];
  label: string;
  name: string;
};

const SelectInput: React.FC<SelectProps> = ({ options, label, ...props }) => {
  const { name, placeholder = 'Select option' } = props;
  const { selected, isOpened, onSelectClick, onSelectOptionClick } = useSelect({
    name,
    placeholder,
  });

  return (
    <Container display="flex" direction="column" width="w-full">
      <Text size="sm" weight="500" color="text-gray-700">
        {label}
      </Text>
      <Spacer bottom={1.5} />
      <div className="select">
        <Container
          className="select-input"
          width="w-full"
          display="flex"
          xAlignment="justify-between"
          yAlignment="center"
          onClick={onSelectClick}>
          <span className="select-input__value">{selected.label}</span>
          <AngleDownIcon width={14} height={14} />
        </Container>
        <div className={classNames('select-dropdown', { 'select-dropdown--active': isOpened })}>
          {options.map((option) => (
            <div
              key={option.value}
              className="select-option"
              onClick={() => onSelectOptionClick(option)}>
              <Text size="sm" color="text-gray-700">
                {option.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SelectInput;
