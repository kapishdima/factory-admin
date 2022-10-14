import React from 'react';
import { Container, TextInput, Text } from 'shared/ui';

const OrderAddressForm: React.FC = () => {
  return (
    <Container display="flex" direction="column" className="flex-1">
      <Text size="sm" weight="500" color="text-gray-700">
        Delivery Address
      </Text>
      <Container display="flex" direction="column" className="gap-y-3 pt-2.5">
        <TextInput name="user_address.address1" label="Address line 1" />
        <TextInput name="user_address.address2" label="Address line 2" />
        <Container display="flex" xAlignment="justify-between" className="gap-x-4">
          <TextInput name="user_address.country" label="Country" />
          <TextInput name="user_address.state" label="State" />
        </Container>
        <Container display="flex" xAlignment="justify-between" className="gap-x-4">
          <TextInput name="user_address.city" label="City" />
          <TextInput name="user_address.pincode" label="Pincode" />
        </Container>
      </Container>
    </Container>
  );
};

export default OrderAddressForm;
