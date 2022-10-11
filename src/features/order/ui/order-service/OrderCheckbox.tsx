import classNames from 'classnames';
import React from 'react';
import { Container } from 'shared/ui';
import { CheckIcon } from 'shared/ui/Icons';

type OrderCheckboxProps = {
  isActive?: boolean;
};

const OrderCheckbox: React.FC<OrderCheckboxProps> = ({ isActive }) => {
  return (
    <Container
      display="flex"
      xAlignment="center"
      yAlignment="center"
      width="w-4"
      height="h-4"
      className={classNames('flex-none rounded-full border transition-colors', {
        'bg-primary-600': isActive,
        'border-primary-600': isActive,
        'border-gray-300': !isActive,
      })}>
      <CheckIcon width={8} height={8} fill={'#fff'} />
    </Container>
  );
};

export default OrderCheckbox;
