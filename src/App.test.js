import { render, screen } from '@testing-library/react';
import App from './App';

test('shows a live trend graph section', () => {
  render(<App />);
  expect(screen.getByText(/live trend/i)).toBeInTheDocument();
});
