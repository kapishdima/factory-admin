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
import { OrderPrices } from '../prices/OrderPrices';
import OrderAddressForm from './OrderAddressForm';

type OrderConfirmFormProps = {
  hasAddress: boolean;
};

const OrderConfirmForm: React.FC<OrderConfirmFormProps> = ({ hasAddress }) => {
  const { submitOrder, getCurrentValue, isLoading } = useOrderCreationFlow();
  const { project_name, description, service } = getCurrentValue();

  return (
    <Form onSubmit={submitOrder} values={{ project_name, description }}>
      <Container width="w-full" display="flex" direction="column" yAlignment="center">
        <Container width="w-full" display="flex" xAlignment="justify-between" className="gap-x-6">
          <Container display="flex" direction="column" className="flex-1 gap-y-5">
            <TextInput
              required
              name="project_name"
              label="Project Name"
              placeholder="Enter your project name"
            />
            <TextAreaInput
              name="description"
              label="Project Description"
              placeholder="Enter your project description"
              height="188px"
            />
          </Container>
          {hasAddress && <OrderAddressForm />}
          <Container display="flex" direction="column" className="flex-1">
            <Text size="sm" weight="500" color="text-gray-700">
              Service
            </Text>
            <Spacer bottom={1.5} />
            <OrderService {...service} selected />
          </Container>
        </Container>
        <Spacer bottom={5} />
        <Container width="w-full" display="flex" xAlignment="justify-between" className="gap-x-6">
          <DropzoneInput
            name="documents"
            label="Upload schematic files and any other related to your project ( Schematic , PCB etc)"
          />
          {hasAddress && <Container display="flex" className="flex-1"></Container>}
          <OrderPrices price={10} />
        </Container>
        <Spacer bottom={4} />
        <Container width="w-6/12">
          <Button type="submit" text="Place Order" loading={isLoading} />
        </Container>
      </Container>
    </Form>
  );
};

export default OrderConfirmForm;
