import { render, screen } from '@testing-library/react';

import Home from '@/pages';

import '@testing-library/jest-dom';

test('Render Home page successfully', () => {
  render(<Home />);

  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
