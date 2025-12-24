import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

// Mock ProjectsList
jest.mock('../components/projects/ProjectsList', () => () => <div data-testid="projects-list">Projects List</div>);

describe('Projects Page', () => {
  test('renders ProjectsList component', () => {
    render(<Projects />);
    expect(screen.getByTestId('projects-list')).toBeInTheDocument();
  });
});
