import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import Home from '@/pages';
import AddContact from '@/pages/add';

import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockImplementation(() => ({
  query: { limit: 5, offset: 0, order: 'asc', search: '' },
}));

test('Render Home page successfully', () => {
  render(<Home />);
  expect(screen.getByText('Favorites')).toBeInTheDocument();
  expect(screen.getByText('Regulars')).toBeInTheDocument();
});

test('Render Add Contact page successfully', () => {
  render(<AddContact />);
  expect(screen.getByText('Add Contact')).toBeInTheDocument();
});
