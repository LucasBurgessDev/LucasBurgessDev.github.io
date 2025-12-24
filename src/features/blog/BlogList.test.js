import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogList from './BlogList';

const mockBlogs = [
  {
    id: 1,
    title: 'Blog 1',
    category: 'Tech',
    created_on: '2023-10-01',
    author_name: 'Author 1',
    author_avatar: 'avatar1.png',
    cover: 'cover1.png',
    content: 'Content 1'
  },
  {
    id: 2,
    title: 'Blog 2',
    category: 'Life',
    created_on: '2023-10-02',
    author_name: 'Author 2',
    author_avatar: 'avatar2.png',
    cover: 'cover2.png',
    content: 'Content 2'
  }
];

describe('BlogList Component', () => {
  test('renders multiple BlogItems', () => {
    render(
      <MemoryRouter>
        <BlogList blogs={mockBlogs} />
      </MemoryRouter>
    );

    expect(screen.getByText('Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Blog 2')).toBeInTheDocument();
  });

  test('renders empty list if no blogs are provided', () => {
    const { container } = render(<BlogList blogs={[]} />);
    expect(container.firstChild).toHaveClass('blogList-wrap');
    expect(container.firstChild.childNodes.length).toBe(0);
  });
});
