import React from 'react';

import { Container, Spacer } from 'shared/ui';
import { OrderConfirmForm, OrderLayout, useOrderCreationFlow } from 'features/order';
import classNames from 'classnames';

const OrderConfirmStep: React.FC = () => {
  const { getCurrentValue } = useOrderCreationFlow();
  const { service } = getCurrentValue();

  return (
    <OrderLayout title="Order Summary">
      <Spacer top={9} />
      <Container
        width="w-full"
        display="flex"
        direction="column"
        yAlignment="center"
        className={classNames({
          'px-60': !service.show_address,
          'pl-7 pr-12': service.show_address,
        })}>
        <OrderConfirmForm hasAddress={service.show_address} />
      </Container>
    </OrderLayout>
  );
};

export default OrderConfirmStep;
