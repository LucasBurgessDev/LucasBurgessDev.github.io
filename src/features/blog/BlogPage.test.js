import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogPage from './BlogPage';
import { getBlogInfo } from '../../services/api';

jest.mock('../../services/api');

const mockBlogs = [
  { 
    id: 1, 
    title: 'Tech Blog', 
    category: 'Tech',
    author_name: 'John',
    author_avatar: 'avatar.png',
    created_on: '2023-10-01',
    cover: 'cover.png',
    content: 'Content 1'
  },
  { 
    id: 2, 
    title: 'Life Blog', 
    category: 'Life',
    author_name: 'Jane',
    author_avatar: 'avatar.png',
    created_on: '2023-10-02',
    cover: 'cover.png',
    content: 'Content 2'
  }
];

describe('BlogPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders blog list in descending order of date', async () => {
    getBlogInfo.mockResolvedValue(mockBlogs);
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    const techBlog = await screen.findByText('Tech Blog');
    const lifeBlog = await screen.findByText('Life Blog');
    
    // In mockBlogs, Life Blog is 2023-10-02, Tech Blog is 2023-10-01
    // So Life Blog should come first.
    const blogItems = screen.getAllByRole('link');
    expect(blogItems[0]).toHaveTextContent('Life Blog');
    expect(blogItems[1]).toHaveTextContent('Tech Blog');
  });

  test('filters blogs when searching', async () => {
    getBlogInfo.mockResolvedValue(mockBlogs);
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    const techBlog = await screen.findByText('Tech Blog');
    expect(techBlog).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search By Category');
    fireEvent.change(searchInput, { target: { value: 'Tech' } });

    expect(screen.getByText('Tech Blog')).toBeInTheDocument();
    expect(screen.queryByText('Life Blog')).not.toBeInTheDocument();
  });

  test('shows EmptyList when no filters match', async () => {
    getBlogInfo.mockResolvedValue(mockBlogs);
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    await screen.findByText('Tech Blog');

    const searchInput = screen.getByPlaceholderText('Search By Category');
    fireEvent.change(searchInput, { target: { value: 'Travel' } });

    expect(await screen.findByText('No results found.')).toBeInTheDocument();
  });

  test('handles alternative data format from API', async () => {
    getBlogInfo.mockResolvedValue({ 
      blogs: [{ 
        id: 3, 
        title: 'Formatted Blog', 
        category: 'General',
        author_name: 'John',
        author_avatar: 'avatar.png',
        created_on: '2023-10-01',
        cover: 'cover.png',
        content: 'Content'
      }] 
    });
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    expect(await screen.findByText('Formatted Blog')).toBeInTheDocument();
  });

  test('handles unexpected data format', async () => {
    getBlogInfo.mockResolvedValue({ invalid: 'data' });
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    expect(await screen.findByText('Unexpected data format received from server.')).toBeInTheDocument();
  });

  test('handles error state and retry', async () => {
    getBlogInfo.mockRejectedValueOnce(new Error('Fetch failed'));
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    expect(await screen.findByText('Failed to fetch blogs. Please check your connection or try again later.')).toBeInTheDocument();

    getBlogInfo.mockResolvedValueOnce(mockBlogs);
    fireEvent.click(screen.getByText('Retry'));

    expect(await screen.findByText('Tech Blog')).toBeInTheDocument();
  });
});
