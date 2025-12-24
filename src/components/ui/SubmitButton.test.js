import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import YourComponent from './SubmitButton';
import axios from 'axios';

jest.mock('axios');

describe('SubmitButton (YourComponent)', () => {
  beforeAll(() => {
    // Mock window.gtag
    window.gtag = jest.fn();
    
    // Mock scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    
    // Mock alert
    window.alert = jest.fn();
  });

  test('renders "Contact Me" button', () => {
    render(<YourComponent />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  test('shows contact form when button is clicked', () => {
    render(<YourComponent />);
    fireEvent.click(screen.getByText('Contact Me'));
    expect(screen.getByText('Contact Me', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
  });

  test('calls gtag on button click', () => {
    render(<YourComponent />);
    fireEvent.click(screen.getByText('Contact Me'));
    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_button_click', expect.any(Object));
  });

  test('submits form successfully', async () => {
    axios.post.mockResolvedValue({ data: 'Success' });
    render(<YourComponent />);
    
    // Open form
    fireEvent.click(screen.getByText('Contact Me'));
    
    // Fill fields
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John', name: 'firstName' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe', name: 'lastName' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com', name: 'email' } });
    
    // Submit
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'https://user-write-7hptrwqgna-nw.a.run.app',
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@example.com',
        },
        expect.any(Object)
      );
    });
    
    expect(window.alert).toHaveBeenCalledWith('Data submitted successfully, thank you!');
  });

  test('handles server error on form submission', async () => {
    axios.post.mockRejectedValue({
      response: { data: 'Server Error' }
    });
    render(<YourComponent />);
    
    fireEvent.click(screen.getByText('Contact Me'));
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Server Error');
    });
  });

  test('handles network error on form submission', async () => {
    axios.post.mockRejectedValue({
      request: {}
    });
    render(<YourComponent />);
    
    fireEvent.click(screen.getByText('Contact Me'));
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Network error. Please try again later.');
    });
  });

  test('calls gtag on input focus', () => {
    render(<YourComponent />);
    fireEvent.click(screen.getByText('Contact Me'));
    
    fireEvent.focus(screen.getByPlaceholderText('First Name'));
    expect(window.gtag).toHaveBeenCalledWith('event', 'input_focus', expect.objectContaining({
      event_label: 'First Name Input Focused'
    }));

    fireEvent.focus(screen.getByPlaceholderText('Last Name'));
    expect(window.gtag).toHaveBeenCalledWith('event', 'input_focus', expect.objectContaining({
      event_label: 'Last Name Input Focused'
    }));

    fireEvent.focus(screen.getByPlaceholderText('Email'));
    expect(window.gtag).toHaveBeenCalledWith('event', 'input_focus', expect.objectContaining({
      event_label: 'Email Input Focused'
    }));
  });

  test('handles generic error on form submission', async () => {
    axios.post.mockRejectedValue(new Error('Generic Error'));
    render(<YourComponent />);
    
    fireEvent.click(screen.getByText('Contact Me'));
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('An error occurred. Please try again later.');
    });
  });
});
