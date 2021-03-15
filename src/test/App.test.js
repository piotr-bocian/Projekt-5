import { render, screen } from '@testing-library/react';
import App from '../view/App';

test('Hello world should be in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
