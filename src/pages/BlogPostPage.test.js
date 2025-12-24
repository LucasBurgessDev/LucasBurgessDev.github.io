import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogPostPage from './BlogPostPage';

// Mock BlogPost
jest.mock('../features/blog/BlogPost', () => () => <div data-testid="blog-post">Blog Post</div>);

describe('BlogPostPage Page Wrapper', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  test('renders BlogPost and scrolls to top', () => {
    render(
      <MemoryRouter>
        <BlogPostPage />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
