import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { fireEvent, render, waitFor, act } from '@testing-library/react';

import { SignUpDTO } from 'entities/sign-up';
import SignUpForm from '../SignUpForm';

const signUpFormData: SignUpDTO = {
  name: 'TestName',
  email: 'test@email.com',
  mobile_no: '1234567890',
  country_code: '+380',
  password: 'password',
  user_type: '',
};

const onSubmit = jest.fn();

const withQueryClient = (
  <MemoryRouter>
    <QueryClientProvider client={new QueryClient()}>
      <SignUpForm />
    </QueryClientProvider>
  </MemoryRouter>
);

describe('SignUpForm', () => {
  it('should submit form with correct form data', async () => {
    const form = render(withQueryClient);
    const inputEmail = form.getByLabelText(/Email/);
    const inputPassword = form.getByLabelText(/Password/);
    const inputName = form.getByLabelText(/Name/);
    const inputPhone = form.getByLabelText(/Phone/);
    const inputCountryCode = form.getByText(/\+380/);
    // const inputUserType = form.getByLabelText(/Password/);
    const button = form.getByRole('button');

    act(() => {
      fireEvent.input(inputEmail, { target: { value: signUpFormData.email } });
      fireEvent.input(inputPassword, { target: { value: signUpFormData.password } });
      fireEvent.input(inputName, { target: { value: signUpFormData.name } });
      fireEvent.input(inputPhone, { target: { value: signUpFormData.mobile_no } });
    });
    fireEvent.click(inputCountryCode);

    fireEvent.submit(button);

    waitFor(() => expect(onSubmit).toBeCalledWith(signUpFormData));
  });
});
