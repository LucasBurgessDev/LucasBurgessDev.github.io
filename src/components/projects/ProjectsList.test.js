import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import { projects } from '../../data/projects';

describe('ProjectsList Component', () => {
  test('renders the page heading and every project card', () => {
    render(
      <MemoryRouter>
        <ProjectsList />
      </MemoryRouter>
    );

    expect(screen.getByText('Projects')).toBeInTheDocument();
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.tagline)).toBeInTheDocument();
    });
  });

  test('renders a repo link for public projects and a status badge for private ones', () => {
    render(
      <MemoryRouter>
        <ProjectsList />
      </MemoryRouter>
    );

    const withRepo = projects.find((p) => p.repoUrl);
    const withoutRepo = projects.find((p) => !p.repoUrl);

    expect(screen.getAllByRole('link', { name: /view repo/i }).length).toBeGreaterThan(0);
    expect(screen.getByText(withoutRepo.status)).toBeInTheDocument();
    // sanity: at least one of each case exists in the fixture data
    expect(withRepo).toBeTruthy();
    expect(withoutRepo).toBeTruthy();
  });
});
