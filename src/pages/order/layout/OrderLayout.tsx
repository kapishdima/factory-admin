import React, { PropsWithChildren } from 'react';
import { Container, Logo, Spacer, Text } from 'shared/ui';

type OrderLayoutProps = {
  title?: string;
};

const OrderLayout: React.FC<PropsWithChildren<OrderLayoutProps>> = ({ title, children }) => {
  return (
    <Container
      display="flex"
      direction="column"
      yAlignment="center"
      className="pt-9 px-28 pb-14 bg-gray-900 min-h-screen">
      <Logo theme="dark" />
      <Spacer bottom={11} />
      <Container
        display="flex"
        direction="column"
        yAlignment="center"
        width="w-full"
        className="bg-white rounded-lg pt-6 pb-8">
        {title && (
          <Text size="xl" weight="600" color="text-gray-600">
            {title}
          </Text>
        )}

        {children}
      </Container>
    </Container>
  );
};

export default OrderLayout;
