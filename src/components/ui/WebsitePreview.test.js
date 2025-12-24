import React from 'react';
import { render, screen } from '@testing-library/react';
import WebsitePreview from './WebsitePreview';

describe('WebsitePreview Component', () => {
  test('renders iframe with correct src', () => {
    const url = 'https://example.com';
    render(<WebsitePreview url={url} />);
    const iframe = screen.getByTitle('Website Preview');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', url);
  });
});
