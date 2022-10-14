import React from 'react';

import { Service } from 'entities/order';
import { Badge, Card, Container, Heading, Spacer, Text } from 'shared/ui';
import { LayoutsIcon } from 'shared/ui/Icons';
import OrderCheckbox from './OrderCheckbox';

type OrderServiceProps = Service & {
  selected?: boolean;
  onClick?: () => void;
};

const OrderService: React.FC<OrderServiceProps> = ({
  name,
  description,
  price,
  selected,
  offer_text,
  onClick,
}) => {
  return (
    <Container width="w-full" style={{ height: 294 }} onClick={onClick}>
      <Card
        isActive={selected}
        rounded
        header={
          <Container display="flex" xAlignment="justify-between" yAlignment="center">
            <Container display="flex" yAlignment="center">
              <LayoutsIcon />
              <Spacer right={3.5} />
              <Text weight="600" color="inherit">
                {name}
              </Text>
            </Container>
            <OrderCheckbox isActive={selected} />
          </Container>
        }>
        <Container display="flex" direction="column">
          <Badge color="green">{offer_text}</Badge>
          <Spacer bottom={4} />
          <Heading weight="600">${price}</Heading>
          <Spacer bottom={1} />
          <Text size="sm" color="text-gray-600">
            {description}
          </Text>
        </Container>
      </Card>
    </Container>
  );
};

export default OrderService;
