import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders welcome h1 text', () => {
  const { getByText } = render(<Todos />);
  const headingElement = getByText(/Learn smthing new?/i);
  expect(headingElement).toBeInTheDocument();
});
