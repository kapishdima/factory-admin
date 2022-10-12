import React from 'react';

import { Container, Spacer } from 'shared/ui';
import { OrderConfirmForm, OrderLayout } from 'features/order';

const OrderConfirmStep: React.FC = () => {
  return (
    <OrderLayout title="Order Summary">
      <Spacer top={9} />
      <Container display="flex" direction="column" yAlignment="center" width="w-3/5">
        <OrderConfirmForm />
      </Container>
    </OrderLayout>
  );
};

export default OrderConfirmStep;
