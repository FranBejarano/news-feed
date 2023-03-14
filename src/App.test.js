import { render, screen } from '@testing-library/react';
import App from './App';

test('renders News feed', () => {
  render(<App />);
  const linkElement = screen.getByText(/news feed/i);
  expect(linkElement).toBeInTheDocument();
});
