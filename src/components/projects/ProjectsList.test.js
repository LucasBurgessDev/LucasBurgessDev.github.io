import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsList from './ProjectsList';

jest.mock('./ProjectItems', () => () => <div data-testid="mock-project-items">Project Items</div>);

describe('ProjectsList Component', () => {
  test('renders headings and ProjectItems', () => {
    render(<ProjectsList />);
    expect(screen.getByText('Projects Worked On')).toBeInTheDocument();
    expect(screen.getByText('Terraform Build')).toBeInTheDocument();
    expect(screen.getByText('Temperature Data Stream')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock-project-items')).toHaveLength(2);
  });
});
