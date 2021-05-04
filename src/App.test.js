import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const el = screen.getByText(/portfolio/i);
  expect(el).toBeInTheDocument();
});
