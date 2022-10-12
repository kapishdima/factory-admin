import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { SignInRequest } from 'entities/sign-in';
import SignInForm from '../SignInForm';

const signInFormData: SignInRequest = {
  email: 'test@email.com',
  password: 'password',
};

const onSubmit = jest.fn();

const withQueryClient = (
  <QueryClientProvider client={new QueryClient()}>
    <SignInForm />
  </QueryClientProvider>
);

describe('SignInForm', () => {
  it('should submit form with correct form data', async () => {
    const form = render(withQueryClient);
    const inputEmail = form.getByLabelText(/Email/);
    const inputPassword = form.getByLabelText(/Password/);
    const button = form.getByRole('button');

    act(() => {
      fireEvent.input(inputEmail, { target: { value: signInFormData.email } });
      fireEvent.input(inputPassword, { target: { value: signInFormData.password } });
    });

    fireEvent.submit(button);

    waitFor(() => expect(onSubmit).toBeCalledWith(signInFormData));
  });
});
