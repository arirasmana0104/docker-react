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
  expect(screen.getByText(/my heart found its home in you/i)).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  const footer = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && /forever\s*&\s*always/i.test(content);
  });
  expect(footer).toBeInTheDocument();
});
