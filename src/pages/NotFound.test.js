import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Page', () => {
  test('renders 404 message and back button', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/lost in space/i)).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });
});
