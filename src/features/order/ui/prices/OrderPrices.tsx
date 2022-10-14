import React from 'react';
import { Card, Container, Text } from 'shared/ui';

type OrderPricesProps = {
  price: number;
};

export const OrderPrices: React.FC<OrderPricesProps> = ({ price }) => {
  return (
    <Container width="w-full" height="h-full" className="flex-1">
      <Card
        size="sm"
        rounded
        header={
          <Container display="flex">
            <Text weight="600" color="text-gray-600">
              Invoice summary
            </Text>
          </Container>
        }>
        <Container display="flex" xAlignment="justify-between" yAlignment="center" className="pb-2">
          <Text weight="500" color="text-gray-700">
            Price
          </Text>
          <Text weight="600" color="text-gray-700">
            ${price}
          </Text>
        </Container>
        <Container display="flex" xAlignment="justify-between" yAlignment="center" className="pb-2">
          <Text weight="500" color="text-gray-700">
            Shipping
          </Text>
          <Text weight="600" color="text-gray-700">
            $10
          </Text>
        </Container>

        <Container display="flex" xAlignment="justify-between" yAlignment="center" className="pb-2">
          <Text weight="500" color="text-gray-700">
            GST
          </Text>
          <Text weight="600" color="text-gray-700">
            $10
          </Text>
        </Container>

        <Container display="flex" xAlignment="justify-between" yAlignment="center">
          <Text weight="500" color="text-gray-700">
            Total Price
          </Text>
          <Text weight="600" color="text-gray-700">
            $10
          </Text>
        </Container>
      </Card>
    </Container>
  );
};
