import React from 'react';
import { SignInForm } from 'features/sign-in';

import { Container, Heading, Spacer, Text, Logo, Link } from 'shared/ui';
import { Routes } from 'app/router';

const SignIn: React.FC = () => {
  return (
    <Container
      width="w-full"
      height="h-screen"
      display="flex"
      xAlignment="center"
      yAlignment="center">
      <Container width="w-3/12" display="flex" direction="column" yAlignment="center">
        <Logo />
        <Spacer bottom={7} />
        <Heading color="text-gray-900" weight="600">
          Log in to your account
        </Heading>
        <Spacer bottom={3} />
        <Text color="text-gray-600">Welcome back! Please enter your details.</Text>
        <Spacer bottom={8} />
        <SignInForm />
        <Spacer bottom={5} />
        <Text size="sm" color="text-gray-600">
          Dont have an account?
          <Link to={Routes.SignUp}>
            <Text size="sm" weight="600" color="text-primary-700">
              {' '}
              Sign up
            </Text>
          </Link>
        </Text>
      </Container>
    </Container>
  );
};

export default SignIn;
