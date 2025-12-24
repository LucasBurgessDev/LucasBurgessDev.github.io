import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './Chip';

describe('Chip Component', () => {
  test('renders with the correct label', () => {
    const label = 'Test Label';
    render(<Chip label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('has the correct class name', () => {
    const label = 'Test Label';
    render(<Chip label={label} />);
    const chipElement = screen.getByText(label);
    expect(chipElement).toHaveClass('chip');
  });
});
