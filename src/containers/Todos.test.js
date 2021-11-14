import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';

beforeEach(() => render(<Todos />));

test('should has a h2 title with TODO TASK text', () => {
  const h2 = screen.getByText(/TODO TASK/i);
  expect(h2).toBeInTheDocument();
});

test('should render an Input element and it has to be enabled', () => {
  const input = screen.getByRole('textbox');
  expect(input).toBeEnabled();
});

test('should render an Button element and it has to has property Agregar', () => {
  const button = screen.getByRole('button', {name: 'Agregar'});
  expect(button).toBeEnabled();
});
