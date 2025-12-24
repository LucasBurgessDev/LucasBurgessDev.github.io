import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import BlogPost from './BlogPost';
import { getBlogInfo } from '../../services/api';

jest.mock('../../services/api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

const mockBlog = {
  id: 1,
  title: 'Blog Post Title',
  category: 'Tech',
  sub_category: ['React', 'Jest'],
  created_on: '2023-10-01',
  content: JSON.stringify([
    { type: 'header', value: 'Introduction' },
    { type: 'text', value: 'This is the body content.' },
    { type: 'image', value: 'img.png', alt: 'Test Image', caption: 'Capt' }
  ]),
  cover: 'cover.png'
};

describe('BlogPost Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders blog post content correctly', async () => {
    getBlogInfo.mockResolvedValue([mockBlog]);
    render(
      <MemoryRouter initialEntries={['/blog/1']}>
        <BlogPost />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Blog Post Title')).toBeInTheDocument();
      expect(screen.getByText('Introduction')).toBeInTheDocument();
      expect(screen.getByText('This is the body content.')).toBeInTheDocument();
      expect(screen.getByAltText('Test Image')).toBeInTheDocument();
      expect(screen.getByText('Capt')).toBeInTheDocument();
    });
  });

  test('shows EmptyList if blog not found', async () => {
    getBlogInfo.mockResolvedValue([]);
    render(
      <MemoryRouter initialEntries={['/blog/1']}>
        <BlogPost />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('No blogs found.')).toBeInTheDocument();
    });
  });

  test('renders blog content with nested JSON and unknown types', async () => {
    const complexBlog = {
      ...mockBlog,
      id: 2,
      content: JSON.stringify([
        { type: 'header', value: 'Header' },
        { type: 'unknown', value: 'Default Text' },
        { type: 'text', value: JSON.stringify([{ type: 'text', value: 'Unpacked Text' }]) },
        { type: 'text', value: null } // Should be skipped in map
      ])
    };
    getBlogInfo.mockResolvedValue([complexBlog]);

    render(
      <MemoryRouter initialEntries={['/blog/2']}>
        <BlogPost />
      </MemoryRouter>
    );

    expect(await screen.findByText('Header')).toBeInTheDocument();
    expect(await screen.findByText('Default Text')).toBeInTheDocument();
    expect(await screen.findByText('Unpacked Text')).toBeInTheDocument();
  });

  test('handles fetch error', async () => {
    getBlogInfo.mockRejectedValue(new Error('Fetch error'));
    render(
      <MemoryRouter initialEntries={['/blog/1']}>
        <BlogPost />
      </MemoryRouter>
    );

    expect(await screen.findByText('No blogs found.')).toBeInTheDocument();
  });
});
