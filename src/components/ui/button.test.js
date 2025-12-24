import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  test('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('applies default styles and sizes', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass('btn--primary');
    expect(buttonElement).toHaveClass('btn--medium');
  });

  test('applies custom buttonStyle and buttonSize', () => {
    render(<Button buttonStyle="btn--outline" buttonSize="btn--large">Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('btn--outline');
    expect(buttonElement).toHaveClass('btn--large');
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
