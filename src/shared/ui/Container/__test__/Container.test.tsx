import React from 'react';

import { render, screen } from '@testing-library/react';
import Container from '../Container';

const TEST_ID = 'test-container';

describe('Container', () => {
  it('should have class "block"', async () => {
    render(<Container data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);
    expect(container).toHaveClass('block');
  });

  it('should have class "flex"', async () => {
    render(<Container display="flex" data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);
    expect(container).toHaveClass('flex');
  });

  it('should have class "row"', async () => {
    render(<Container display="flex" direction="row" data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);
    expect(container).not.toHaveClass('row');
  });

  it('should\'t have class "row" when display block', async () => {
    render(<Container display="block" direction="row" data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);

    expect(container).not.toHaveClass('row');
  });

  it('should have class "w-full"', async () => {
    render(<Container width="w-full" data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);

    expect(container).toHaveClass('w-full');
  });

  it('should have extra class name', async () => {
    render(<Container className="custom" data-testid={TEST_ID} />);
    const container = screen.getByTestId(TEST_ID);

    expect(container).toHaveClass('custom');
  });
});
