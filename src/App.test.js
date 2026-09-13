import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I LOVE YOU heading', () => {
  render(<App />);
  const heading = screen.getByText(/I LOVE YOU/i);
  expect(heading).toBeInTheDocument();
});

test('renders MY ADIKA heading', () => {
  render(<App />);
  const heading = screen.getByText(/MY ADIKA/i);
  expect(heading).toBeInTheDocument();
});

test('renders the romantic message', () => {
  render(<App />);
  expect(screen.getByText(/my heart found its home in you/i)).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  const footer = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && /forever\s*&\s*always/i.test(content);
  });
  expect(footer).toBeInTheDocument();
});

test('renders the card container', () => {
  render(<App />);
  const container = screen.getByText(/I LOVE YOU/i).closest('.romantic-card');
  expect(container).toHaveClass('romantic-card');
});

test('renders the heart symbol', () => {
  render(<App />);
  const hearts = screen.getAllByText('♥');
  expect(hearts.length).toBeGreaterThan(0);
});
