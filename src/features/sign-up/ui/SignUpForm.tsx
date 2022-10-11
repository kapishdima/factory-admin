import React from 'react';

import { Button, Form, PasswordField, PhoneInput, TextField } from 'shared/ui';
import { useSignUp } from 'entities/sign-up/';
import { SelectInput } from 'shared/ui/Inputs';

const options = [
  { value: 'individual', label: 'Individual' },
  { value: 'company', label: 'Company' },
];

const SignUpForm: React.FC = () => {
  const { onSubmit } = useSignUp();

  return (
    <Form onSubmit={onSubmit}>
      <TextField label="Name" name="name" placeholder="Enter your name" />
      <TextField label="Email" name="email" placeholder="Enter your email" />
      <PhoneInput label="Phone" name="mobile_no" id="phone" placeholder="Enter your phone number" />
      <PasswordField
        label="Password"
        name="password"
        placeholder="Create a password"
        hint="Must be at least 8 characters."
      />
      <SelectInput label="User type" name="user_type" options={options} />
      <Button type="submit" primary text="Get started" />
    </Form>
  );
};

export default SignUpForm;
