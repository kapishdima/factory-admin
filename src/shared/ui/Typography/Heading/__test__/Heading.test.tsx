import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

const TEST_ID = 'heading-test';
const mockTextContent = 'Test heading';

describe('Heading', () => {
  it('should have text "Test text"', async () => {
    render(<Heading data-testid={TEST_ID}>{mockTextContent}</Heading>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveTextContent(mockTextContent);
  });

  it('should have default size', async () => {
    render(<Heading data-testid={TEST_ID}>{mockTextContent}</Heading>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-3xl');
  });

  it('should have default weight', async () => {
    render(<Heading data-testid={TEST_ID}>{mockTextContent}</Heading>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('font-normal');
  });

  it('should have color red', async () => {
    render(
      <Heading data-testid={TEST_ID} color="text-red">
        {mockTextContent}
      </Heading>,
    );
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-red');
  });
});
