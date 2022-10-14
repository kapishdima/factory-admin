import React from 'react';

import {
  OrderServicesList,
  OrderLayout,
  useOrderCreationFlow,
  useOrderService,
} from 'features/order';

import { Button, Container, Spacer } from 'shared/ui';
import { useLoaderData } from 'react-router-dom';
import { Service } from 'entities/order';

const OrderSelectServiceStep: React.FC = () => {
  const { service, onServiceClick } = useOrderService();
  const { saveOrderService } = useOrderCreationFlow();
  const services = useLoaderData() as Service[];

  const onClick = () => {
    saveOrderService(service);
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
