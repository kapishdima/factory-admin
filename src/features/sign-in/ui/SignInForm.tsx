import React from 'react';

import { useSignIn } from 'entities/sign-in';
import { Button, Form, TextField, PasswordField } from 'shared/ui';

const SignInForm: React.FC = () => {
  const { onSubmit } = useSignIn();

  return (
    <Form onSubmit={onSubmit}>
      <TextField label="Email" name="email" placeholder="Enter your email" />
      <PasswordField label="Password" name="password" placeholder="Enter your password" />
      <Button type="submit" primary text="Sign In" />
    </Form>
  );
};

export default SignInForm;
