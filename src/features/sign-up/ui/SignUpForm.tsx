import React from 'react';

import { Button, Form, PasswordInput, PhoneInput, TextInput } from 'shared/ui';
import { signUpSchema, useSignUp } from 'entities/sign-up/';
import { SelectInput } from 'shared/ui/Inputs';

const options = [
  { value: 'individual', label: 'Individual' },
  { value: 'company', label: 'Company' },
];

const SignUpForm: React.FC = () => {
  const { onSubmit, isLoading } = useSignUp();

  return (
    <Form onSubmit={onSubmit} schema={signUpSchema}>
      <TextInput label="Name" name="name" placeholder="Enter your name" />
      <TextInput label="Email" type="email" name="email" placeholder="Enter your email" />
      <PhoneInput label="Phone" name="mobile_no" id="phone" placeholder="Enter your phone number" />
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create a password"
        hint="Must be at least 8 characters."
      />
      <SelectInput label="User type" name="user_type" options={options} />
      <Button loading={isLoading} type="submit" primary text="Get started" />
    </Form>
  );
};

export default SignUpForm;
