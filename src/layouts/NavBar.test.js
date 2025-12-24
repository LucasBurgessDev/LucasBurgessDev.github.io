import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  test('renders logo and links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText('LucasBurgessDev')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  test('toggles mobile menu on click', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const menuIcon = screen.getByRole('list').previousSibling; // The menu-icon div
    // Alternatively, find by class if needed, but let's try finding the icon
    const icon = screen.getByRole('navigation').querySelector('.fa-bars');
    
    fireEvent.click(icon.parentElement);
    expect(icon.parentElement.nextSibling).toHaveClass('active');
    
    fireEvent.click(icon.parentElement);
    expect(icon.parentElement.nextSibling).not.toHaveClass('active');
  });

  test('closes mobile menu when a link is clicked', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const icon = screen.getByRole('navigation').querySelector('.fa-bars');
    fireEvent.click(icon.parentElement);
    expect(icon.parentElement.nextSibling).toHaveClass('active');

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(icon.parentElement.nextSibling).not.toHaveClass('active');
  });

  test('handles window resize', () => {
    // Set initial width
    global.innerWidth = 1000;
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Initial state check would be hard without more exposed state, 
    // but we can trigger the event
    global.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    // No visual changes to check easily here as 'button' state is not directly rendered 
    // in the current version of NavBar (it's unused in the JSX)
  });
});
