import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '../Checkbox';

const TEST_ID = 'test-checkbox';

describe('Checkbox', () => {
  it('should have class "checkbox"', async () => {
    render(<Checkbox data-testid={TEST_ID} />);
    const checkbox = screen.getByTestId(TEST_ID);
    expect(checkbox).toHaveClass('checkbox');
  });

  it('should have class "checkbox--active" when user clicked', async () => {
    render(<Checkbox data-testid={TEST_ID} />);
    const checkbox = screen.getByTestId(TEST_ID);

    await userEvent.click(checkbox);

    expect(checkbox).toHaveClass('checkbox--active');
  });
});
