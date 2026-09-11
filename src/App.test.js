import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I LOVE YOU ADIKAA link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I LOVE YOU ADIKAA/i);
  expect(linkElement).toBeInTheDocument();
});
