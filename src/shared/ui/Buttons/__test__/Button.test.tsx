import React from 'react';

import { render, screen } from '@testing-library/react';
import Button from '../Button';

const TEST_ID = 'button-test';

describe('Button', () => {
  it('should have text "Text"', async () => {
    render(<Button text="Test" data-testid={TEST_ID} />);

    const button = await screen.findByTestId(TEST_ID);
    expect(button).toHaveTextContent('Test');
  });
  it('should have class "button"', async () => {
    render(<Button text="Test" />);

    const button = await screen.findByText(/Test/);
    expect(button).toHaveClass('button');
  });
  it('should have class "button--primary"', async () => {
    render(<Button primary text="Test" />);

    const button = await screen.findByText(/Test/);
    expect(button).toHaveClass('button--primary');
  });
});
