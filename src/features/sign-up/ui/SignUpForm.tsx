import React from 'react';

import { Button, Form, PasswordField, PhoneInput, Spacer, TextField } from 'shared/ui';
import { useSignUp } from 'entities/sign-up/';

const SignUpForm: React.FC = () => {
  const { onSubmit } = useSignUp();

  return (
    <Form onSubmit={onSubmit}>
      <TextField label="Name" name="name" placeholder="Enter your name" />
      <Spacer bottom={5} />
      <TextField label="Email" name="email" placeholder="Enter your email" />
      <Spacer bottom={5} />
      <PhoneInput label="Phone" name="mobile_no" id="phone" placeholder="Enter your phone number" />
      <Spacer bottom={5} />
      <PasswordField
        label="Password"
        name="password"
        placeholder="Create a password"
        hint="Must be at least 8 characters."
      />
      <Spacer bottom={5} />
      <Button type="submit" primary text="Get started" />
    </Form>
  );
};

export default SignUpForm;
