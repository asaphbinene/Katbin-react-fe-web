import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KATBIN Enterprises link', () => {
  render(<App />);
  const linkElement = screen.getByText(/KATBIN Enterprises/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about services to cut the waste of time text', () => {
  render(<App />);
  const textElement = screen.getByText(/All about services to cut the waste of time/i);
  expect(textElement).toBeInTheDocument();
});

