import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

// Mock ResumeItems
jest.mock('../components/resume/ResumeItems', () => () => <div data-testid="resume-items">Resume Items</div>);

describe('Resume Page', () => {
  test('renders ResumeItems component', () => {
    render(<Resume />);
    expect(screen.getByTestId('resume-items')).toBeInTheDocument();
  });
});
