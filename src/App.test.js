import { render, screen } from '@testing-library/react';
import App from './App';

test('App has Todo component rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO TASK/i);
  expect(linkElement).toBeInTheDocument();
});
