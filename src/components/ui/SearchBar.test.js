import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders with the correct value', () => {
    const value = 'React';
    render(<SearchBar value={value} handleSearchKey={() => {}} clearSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search By Category');
    expect(inputElement.value).toBe(value);
  });

  test('calls handleSearchKey on change', () => {
    const handleSearchKey = jest.fn();
    render(<SearchBar value="" handleSearchKey={handleSearchKey} clearSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search By Category');
    fireEvent.change(inputElement, { target: { value: 'New Query' } });
    expect(handleSearchKey).toHaveBeenCalledWith('New Query');
  });
});
