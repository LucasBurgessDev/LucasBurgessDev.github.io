import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogItem from './BlogItem';

const mockBlog = {
  id: 1,
  title: 'Test Blog Post',
  category: 'Tech',
  created_on: '2023-10-01',
  author_name: 'John Doe',
  author_avatar: 'avatar.png',
  cover: 'cover.png',
  content: [{ type: 'text', value: 'Simple text content' }]
};

describe('BlogItem Component', () => {
  test('renders blog information correctly', () => {
    render(
      <MemoryRouter>
        <BlogItem blog={mockBlog} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('2023-10-01')).toBeInTheDocument();
    expect(screen.getByText('Simple text content')).toBeInTheDocument();
  });

  test('handles complex nested content correctly', () => {
    const blogWithNested = {
      ...mockBlog,
      content: [
        { type: 'image', value: '...' },
        { type: 'text', value: 'Nested text' }
      ]
    };

    render(
      <MemoryRouter>
        <BlogItem blog={blogWithNested} />
      </MemoryRouter>
    );

    expect(screen.getByText('Nested text')).toBeInTheDocument();
  });

  test('handles conclusion blocks', () => {
    const blogWithConclusion = {
      ...mockBlog,
      content: [{ type: 'conclusion', value: 'Conclusion Desc' }]
    };

    render(
      <MemoryRouter>
        <BlogItem blog={blogWithConclusion} />
      </MemoryRouter>
    );

    expect(screen.getByText('Conclusion Desc')).toBeInTheDocument();
  });

  test('handles null content gracefully', () => {
    const blogWithNull = { ...mockBlog, content: null };
    render(
      <MemoryRouter>
        <BlogItem blog={blogWithNull} />
      </MemoryRouter>
    );
    expect(screen.getByText('Read more about this project...')).toBeInTheDocument();
  });
});
