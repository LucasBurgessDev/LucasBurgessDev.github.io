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
  content: [
    { type: 'header', value: 'Introduction' },
    { type: 'text', value: 'This is the body content.' },
    { type: 'image', value: 'img.png', alt: 'Test Image', caption: 'Capt' }
  ],
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

  test('renders unknown block types via the default paragraph fallback and skips empty values', async () => {
    const complexBlog = {
      ...mockBlog,
      id: 2,
      content: [
        { type: 'header', value: 'Header' },
        { type: 'unknown', value: 'Default Text' },
        { type: 'text', value: null } // Should be skipped in map
      ]
    };
    getBlogInfo.mockResolvedValue([complexBlog]);

    render(
      <MemoryRouter initialEntries={['/blog/2']}>
        <BlogPost />
      </MemoryRouter>
    );

    expect(await screen.findByText('Header')).toBeInTheDocument();
    expect(await screen.findByText('Default Text')).toBeInTheDocument();
  });

  test('renders code, quote, and video blocks', async () => {
    const richBlog = {
      ...mockBlog,
      id: 3,
      content: [
        { type: 'code', value: 'SELECT 1;', language: 'sql' },
        { type: 'quote', value: 'A pull quote.', attribution: 'Someone' },
        { type: 'video', value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { type: 'video', value: 'https://storage.googleapis.com/bucket/clip.mp4' },
      ]
    };
    getBlogInfo.mockResolvedValue([richBlog]);

    render(
      <MemoryRouter initialEntries={['/blog/3']}>
        <BlogPost />
      </MemoryRouter>
    );

    expect(await screen.findByText('SELECT 1;')).toBeInTheDocument();
    expect(screen.getByText('A pull quote.')).toBeInTheDocument();
    expect(screen.getByText('— Someone')).toBeInTheDocument();
    expect(screen.getByTitle('Blog video 2')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/dQw4w9WgXcQ'
    );
    expect(document.querySelector('video')).toHaveAttribute(
      'src',
      'https://storage.googleapis.com/bucket/clip.mp4'
    );
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
