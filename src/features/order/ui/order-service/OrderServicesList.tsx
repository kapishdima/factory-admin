import React from 'react';

import { Service } from 'entities/order';
import { Container } from 'shared/ui';

import OrderService from './OrderService';

type OrderServicesListProps = {
  services: Service[];
  selected: Service;
  onServiceClick: (service: Service) => void;
};

const OrderServicesList: React.FC<OrderServicesListProps> = ({
  selected,
  services,
  onServiceClick,
}) => {
  return (
    <Container display="flex" className="flex-wrap gap-4 pt-9" xAlignment="center">
      {services.map((service) => (
        <Container width="w-1/4" key={service.name}>
          <OrderService
            onClick={() => onServiceClick(service)}
            selected={selected?.name === service.name}
            {...service}
          />
        </Container>
      ))}
    </Container>
  );
};

export default OrderServicesList;
