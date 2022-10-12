import React from 'react';

import { useSignIn } from 'entities/sign-in';
import { Button, Form, TextInput, PasswordInput } from 'shared/ui';

const SignInForm: React.FC = () => {
  const { onSubmit, isLoading } = useSignIn();

  return (
    <Form onSubmit={onSubmit}>
      <TextInput label="Email" name="email" placeholder="Enter your email" />
      <PasswordInput label="Password" name="password" placeholder="Enter your password" />
      <Button loading={isLoading} type="submit" primary text="Sign In" />
    </Form>
  );
};

export default SignInForm;
