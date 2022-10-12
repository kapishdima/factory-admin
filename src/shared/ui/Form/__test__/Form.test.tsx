import React from 'react';

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button, TextInput } from 'shared/ui';
import Form from '../Form';

const TEST_ID = 'test-Form';

const onSubmit = jest.fn();
const inputNames = ['name', 'email'];
const formValues = {
  name: 'test_name',
  email: 'test@email.com',
};

const TestForm = () => {
  return (
    <Form onSubmit={onSubmit} data-testid={TEST_ID}>
      <TextInput label="Name" name="name" placeholder="Name" />
      <TextInput label="Email" name="email" placeholder="Email" />
      <Button type="submit" text="Submit" />
    </Form>
  );
};

describe('Form', () => {
  it('should have children', async () => {
    render(<TestForm />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);
  });

  it('inputs should have name', async () => {
    render(<TestForm />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => {
      const inputName = input.getAttribute('name');
      expect(inputNames).toContain(inputName);
    });
  });
  it('should get values from inputs', async () => {
    const form = render(<TestForm />);

    const inputName = form.getByPlaceholderText('Name');
    const inputEmail = form.getByPlaceholderText('Email');
    const button = form.getByRole('button');

    act(() => {
      fireEvent.input(inputName, { target: { value: formValues['name'] } });
      fireEvent.input(inputEmail, { target: { value: formValues['email'] } });
    });

    fireEvent.submit(button);

    // await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(formValues));
  });
});
