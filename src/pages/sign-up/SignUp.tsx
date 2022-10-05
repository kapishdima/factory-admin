import { SignUpForm } from 'features/sign-up';
import React from 'react';

import { Container, Heading, Spacer, Text, Logo, Link } from 'shared/ui';

const SignUp: React.FC = () => {
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
          Create an account
        </Heading>
        <Spacer bottom={8} />
        <SignUpForm />
        <Spacer bottom={5} />
        <Text size="sm" color="text-gray-600">
          Already have an account?
          <Link to="/sign-in">
            <Text size="sm" weight="600" color="text-primary-700">
              {' '}
              Log in
            </Text>
          </Link>
        </Text>
      </Container>
    </Container>
  );
};

export default SignUp;
