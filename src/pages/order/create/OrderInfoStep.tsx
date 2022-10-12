import React from 'react';

import { OrderInfoForm, OrderLayout } from 'features/order';
import { Container, Heading, Spacer, Text } from 'shared/ui';

const OrderInfoStep: React.FC = () => {
  return (
    <OrderLayout>
      <Container
        width="w-1/3"
        height="h-screen"
        display="flex"
        direction="column"
        yAlignment="center">
        <Spacer top={6} />
        <Heading weight="600" size="sm">
          Welcome Olivia
        </Heading>
        <Spacer top={5} />
        <Text size="xl" weight="600" color="text-gray-600">
          What would you like to build today?
        </Text>
        <Spacer top={4} />
        <Text size="md" weight="600" color="text-gray-600">
          we need a few details of your project
        </Text>
        <Spacer top={8} />
        <Container width="w-full" height="h-72">
          <OrderInfoForm />
        </Container>
      </Container>
    </OrderLayout>
  );
};

export default OrderInfoStep;
