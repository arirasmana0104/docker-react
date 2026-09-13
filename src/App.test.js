import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I LOVE YOU heading', () => {
  render(<App />);
  const heading = screen.getByText(/I LOVE YOU/i);
  expect(heading).toBeInTheDocument();
});

test('renders ADIKAA heading', () => {
  render(<App />);
  const heading = screen.getByText(/ADIKAA/i);
  expect(heading).toBeInTheDocument();
});

test('renders the romantic message', () => {
  render(<App />);
  expect(screen.getByText(/somehow I found you/i)).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  expect(screen.getByText(/Forever & always/i)).toBeInTheDocument();
});
