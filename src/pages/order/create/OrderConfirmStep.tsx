import React, { useState } from 'react';

import { Container, Spacer } from 'shared/ui';
import { OrderConfirmForm, OrderLayout, useOrderCreationFlow } from 'features/order';
import classNames from 'classnames';

const OrderConfirmStep: React.FC = () => {
  const { getCurrentValue } = useOrderCreationFlow();
  const { service } = getCurrentValue();
  const [hasAddressForm, setAdressForm] = useState(
    service.name === 'PCB Manufacturing' || service.name === 'Schematic + PCB + Manufaturing',
  );

  return (
    <OrderLayout title="Order Summary">
      <Spacer top={9} />
      <Container
        width="w-full"
        display="flex"
        direction="column"
        yAlignment="center"
        className={classNames({ 'px-60': !hasAddressForm, 'pl-7 pr-12': hasAddressForm })}>
        <OrderConfirmForm hasAddress={hasAddressForm} />
      </Container>
    </OrderLayout>
  );
};

export default OrderConfirmStep;
