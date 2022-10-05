import { render, screen } from '@testing-library/react';
import Text from '../Text';

const TEST_ID = 'text-test';
const mockTextContent = 'Test text';

describe('Text', () => {
  it('should have text "Test text"', async () => {
    render(<Text data-testid={TEST_ID}>{mockTextContent}</Text>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveTextContent(mockTextContent);
  });

  it('should have default size', async () => {
    render(<Text data-testid={TEST_ID}>{mockTextContent}</Text>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-base');
  });

  it('should have size "md"', async () => {
    render(
      <Text data-testid={TEST_ID} size="sm">
        {mockTextContent}
      </Text>,
    );
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-sm');
  });

  it('should have default weight', async () => {
    render(<Text data-testid={TEST_ID}>{mockTextContent}</Text>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('font-normal');
  });

  it('should have weight 600', async () => {
    render(
      <Text data-testid={TEST_ID} weight="600">
        {mockTextContent}
      </Text>,
    );
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('font-semibold');
  });

  it('should have default color', async () => {
    render(<Text data-testid={TEST_ID}>{mockTextContent}</Text>);
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-black');
  });

  it('should have color red', async () => {
    render(
      <Text data-testid={TEST_ID} color="text-red">
        {mockTextContent}
      </Text>,
    );
    const text = screen.getByTestId(TEST_ID);
    expect(text).toHaveClass('text-red');
  });
});
