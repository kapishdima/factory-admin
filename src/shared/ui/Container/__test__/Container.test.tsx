import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  it('should have class "block"', async () => {
    render(<Container data-testid="test-container" />);
    const container = screen.getByTestId('test-container');
    expect(container).toHaveClass('block');
  });

  it('should have class "flex"', async () => {
    render(<Container display="flex" data-testid="test-container" />);
    const container = screen.getByTestId('test-container');
    expect(container).toHaveClass('flex');
  });

  it('should have class "row"', async () => {
    render(<Container display="flex" direction="row" data-testid="test-container" />);
    const container = screen.getByTestId('test-container');
    expect(container).not.toHaveClass('row');
  });

  it('should\'t have class "row" if display block', async () => {
    render(<Container display="block" direction="row" data-testid="test-container" />);
    const container = screen.getByTestId('test-container');

    expect(container).not.toHaveClass('row');
  });
});
