import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmptyList from './EmptyList';

describe('EmptyList Component', () => {
  test('renders default message when no message is provided', () => {
    render(<EmptyList />);
    expect(screen.getByText('No blogs found.')).toBeInTheDocument();
  });

  test('renders custom message', () => {
    render(<EmptyList message="No results" />);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  test('renders clear search button when clearSearch prop is provided', () => {
    const clearSearch = jest.fn();
    render(<EmptyList clearSearch={clearSearch} />);
    const button = screen.getByText('Clear Search');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(clearSearch).toHaveBeenCalledTimes(1);
  });

  test('does not render clear search button when clearSearch prop is not provided', () => {
    render(<EmptyList />);
    expect(screen.queryByText('Clear Search')).not.toBeInTheDocument();
  });
});
