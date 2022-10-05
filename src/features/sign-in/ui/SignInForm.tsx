import React from 'react';

import { useSignIn } from 'entities/sign-in';
import { Button, Checkbox, Container, Form, Spacer, TextField, PasswordField } from 'shared/ui';

const SignInForm: React.FC = () => {
  const { onSubmit } = useSignIn();

  return (
    <Form onSubmit={onSubmit}>
      <TextField label="Email" name="email" placeholder="Enter your email" />
      <Spacer bottom={5} />
      <PasswordField label="Password" name="password" placeholder="Enter your password" />
      <Spacer bottom={5} />
      <Container width="w-full">
        <Checkbox label="Remember for 30 days" name="remember" />
      </Container>
      <Spacer bottom={5} />
      <Button type="submit" primary text="Sign In" />
    </Form>
  );
};

export default SignInForm;
