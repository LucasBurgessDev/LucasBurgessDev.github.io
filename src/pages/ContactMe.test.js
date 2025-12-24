import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactMe from './ContactMe';

describe('ContactMe Page', () => {
  test('renders CONTACT ME heading', () => {
    render(<ContactMe />);
    expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
  });
});
