import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('ace-builds/src-noconflict/mode-java', () => ({}));
jest.mock('ace-builds/src-noconflict/theme-github', () => ({}));

import CodeEditor from './CodeEditor';

jest.mock('react-ace', () => ({
  __esModule: true,
  default: ({ value }) => <div data-testid="mock-ace-editor">{value}</div>
}));

describe('CodeEditor Component', () => {
  test('renders with the correct code value', () => {
    const code = 'console.log("hello");';
    render(<CodeEditor code={code} onChange={() => {}} />);
    expect(screen.getByTestId('mock-ace-editor')).toHaveTextContent(code);
  });
});
