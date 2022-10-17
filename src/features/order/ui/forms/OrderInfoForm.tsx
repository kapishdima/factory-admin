import { orderInfoSchema } from 'entities/order';
import React from 'react';

import { Button, Form, Spacer, TextInput, TextAreaInput } from 'shared/ui';
import { useOrderCreationFlow } from '../../hook/useOrderCreationFlow';

const OrderInfoForm: React.FC = () => {
  const { saveOrderInfo } = useOrderCreationFlow();
  return (
    <Form onSubmit={saveOrderInfo} schema={orderInfoSchema}>
      <TextInput name="project_name" label="Project Name" placeholder="Enter your project name" />
      <TextAreaInput
        name="description"
        label="Project Description"
        placeholder="Enter your project description"
      />
      <Spacer bottom={5} />
      <Button text="Next" />
    </Form>
  );
};

export default OrderInfoForm;
