import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from './Blog';

// Mock BlogPage
jest.mock('../features/blog/BlogPage', () => () => <div data-testid="blog-page">Blog Page</div>);

describe('Blog Page Wrapper', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  test('renders BlogPage and scrolls to top', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
