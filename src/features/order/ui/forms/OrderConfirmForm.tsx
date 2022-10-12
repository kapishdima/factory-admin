import React from 'react';

import {
  Container,
  TextInput,
  TextAreaInput,
  Spacer,
  DropzoneInput,
  Button,
  Text,
  Form,
} from 'shared/ui';

import { useOrderCreationFlow } from '../../hook/useOrderCreationFlow';
import OrderService from '../order-service/OrderService';

const OrderConfirmForm: React.FC = () => {
  const { submitOrder, getCurrentValue } = useOrderCreationFlow();
  const { name, description, service } = getCurrentValue();
  return (
    <Form onSubmit={submitOrder} values={{ name, description }}>
      <Container display="flex" direction="column" yAlignment="center">
        <Container display="flex" xAlignment="justify-between" className="gap-x-6">
          <Container className="flex flex-col w-full h-full flex-1 gap-y-5">
            <TextInput name="name" label="Project Name" placeholder="Enter your project name" />
            <TextAreaInput
              name="description"
              label="Project Description"
              placeholder="Enter your project description"
              height="188px"
            />
          </Container>
          <Container display="flex" direction="column" className="flex-1">
            <Text size="sm" weight="500" color="text-gray-700">
              Service
            </Text>
            <Spacer bottom={1.5} />
            <OrderService {...service} selected />
          </Container>
        </Container>
        <Spacer bottom={10} />
        <Text size="sm" weight="500" color="text-gray-700">
          Upload schematic files and any other related to your project ( Schematic , PCB etc){' '}
        </Text>
        <Spacer bottom={2} />
        <DropzoneInput name="file" />
        <Spacer bottom={9} />
        <Container width="w-6/12">
          <Button type="submit" text="Place Order" />
        </Container>
      </Container>
    </Form>
  );
};

export default OrderConfirmForm;
