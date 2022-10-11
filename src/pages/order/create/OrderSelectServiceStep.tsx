import React from 'react';

import { OrderServicesList } from 'features/order';
import { Button, Container, Spacer } from 'shared/ui';

import OrderLayout from '../layout/OrderLayout';
import { useOrderCreationFlow } from 'features/order/hook/useOrderCreationFlow';
import { Service } from 'entities/order';
import { useOrderService } from 'features/order/hook/useOrderService';

const services: Service[] = [
  {
    name: 'Schematic design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    price: 10,
  },
  {
    name: 'PCB Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    price: 10,
  },
  {
    name: 'Schematic + PCB Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    price: 10,
  },
  {
    name: 'PCB Manufacturing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    price: 10,
  },
  {
    name: 'Schematic + PCB + Manufaturing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    price: 10,
  },
];

const OrderSelectServiceStep: React.FC = () => {
  const { service, onServiceClick } = useOrderService();
  const { saveOrderService } = useOrderCreationFlow();

  const onClick = () => {
    saveOrderService({ service });
  };

  return (
    <OrderLayout title="Select service">
      <OrderServicesList services={services} selected={service} onServiceClick={onServiceClick} />
      <Spacer top={9} />
      <Container width="w-3/12">
        <Button text="Next" onClick={onClick} />
      </Container>
    </OrderLayout>
  );
};
export default OrderSelectServiceStep;
