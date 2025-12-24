import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock SubmitButton component used in Footer
jest.mock('../components/ui/SubmitButton', () => () => <div data-testid="mock-submit-button">Submit Button</div>);

describe('Footer Component', () => {
  test('renders rights and social links', () => {
    render(<Footer />);

    expect(screen.getByText('LucasBurgessDev')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Youtube')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
  });

  test('renders the submit button component', () => {
    render(<Footer />);
    expect(screen.getByTestId('mock-submit-button')).toBeInTheDocument();
  });
});
