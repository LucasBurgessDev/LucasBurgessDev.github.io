import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import AskProjects from './AskProjects';

jest.mock('axios');

describe('AskProjects Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the question form and suggestion chips', () => {
    render(<AskProjects />);
    expect(screen.getByText('Ask about my projects')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Home Assistant webhook/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ask' })).toBeInTheDocument();
  });

  test('submits a question and renders the answer', async () => {
    axios.post.mockResolvedValue({ data: { answer: 'It works by pushing sensor readings over a webhook.' } });
    render(<AskProjects />);

    fireEvent.change(screen.getByPlaceholderText(/Home Assistant webhook/), {
      target: { value: 'How does the webhook work?' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Ask' }));

    expect(await screen.findByText(/pushing sensor readings/)).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringContaining('ask-projects'),
      { question: 'How does the webhook work?' }
    );
  });

  test('shows the error message from a rate-limited response', async () => {
    axios.post.mockRejectedValue({ response: { data: { error: "You've hit today's question limit." } } });
    render(<AskProjects />);

    fireEvent.change(screen.getByPlaceholderText(/Home Assistant webhook/), { target: { value: 'A question' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ask' }));

    expect(await screen.findByText(/hit today's question limit/)).toBeInTheDocument();
  });

  test('clicking a suggestion chip asks that question directly', async () => {
    axios.post.mockResolvedValue({ data: { answer: 'Cloud Run + Gemini + BigQuery.' } });
    render(<AskProjects />);

    fireEvent.click(screen.getByText(/tech stack behind the AI cycling coach/));

    expect(await screen.findByText('Cloud Run + Gemini + BigQuery.')).toBeInTheDocument();
  });

  test('does not submit an empty question', () => {
    render(<AskProjects />);
    fireEvent.click(screen.getByRole('button', { name: 'Ask' }));
    expect(axios.post).not.toHaveBeenCalled();
  });
});
