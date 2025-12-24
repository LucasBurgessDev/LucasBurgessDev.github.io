import React from 'react';
import { render } from '@testing-library/react';
import ResumeItems from './ResumeItems';

describe('ResumeItems Component', () => {
  test('renders resume container', () => {
    const { container } = render(<ResumeItems />);
    expect(container.querySelector('.resume')).toBeInTheDocument();
  });
});
