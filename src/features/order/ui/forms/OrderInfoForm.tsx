import React from 'react';

import { Button, Form, Spacer, TextField, TextAreaInput, Container } from 'shared/ui';
import { useOrderCreationFlow } from '../../hook/useOrderCreationFlow';

const OrderInfoForm: React.FC = () => {
  const { saveOrderInfo } = useOrderCreationFlow();
  return (
    <Form onSubmit={saveOrderInfo}>
      <TextField name="name" label="Project Name" placeholder="Enter your project name" />
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
