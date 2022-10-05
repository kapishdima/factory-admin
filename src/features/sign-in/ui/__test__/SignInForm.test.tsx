import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { SignInDTO } from 'entities/sign-in';
import SignInForm from '../SignInForm';

const signInFormData: SignInDTO = {
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

    fireEvent.input(inputEmail, { target: { value: signInFormData.email } });
    fireEvent.input(inputPassword, { target: { value: signInFormData.password } });

    fireEvent.submit(button);

    expect(onSubmit).toBeCalledWith(signInFormData);
  });
});
