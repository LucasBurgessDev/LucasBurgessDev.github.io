import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectItems from './ProjectItems';

jest.mock('../codeeditor/CodeEditor', () => () => <div data-testid="mock-code-editor">Code Editor</div>);

describe('ProjectItems Component', () => {
  test('renders CodeEditor', () => {
    render(<ProjectItems />);
    expect(screen.getByTestId('mock-code-editor')).toBeInTheDocument();
  });
});
