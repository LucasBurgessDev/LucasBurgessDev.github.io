import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import LiveStatus from './LiveStatus';

jest.mock('axios');

describe('LiveStatus Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders nothing while loading or when the feed is empty', async () => {
    axios.get.mockResolvedValue({ data: { rooms: [], plants: [] } });
    const { container } = render(
      <MemoryRouter>
        <LiveStatus />
      </MemoryRouter>
    );

    expect(container).toBeEmptyDOMElement();
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  test('renders nothing when the request fails', async () => {
    axios.get.mockRejectedValue(new Error('offline'));
    const { container } = render(
      <MemoryRouter>
        <LiveStatus />
      </MemoryRouter>
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  test('renders live room and plant readings when present', async () => {
    axios.get.mockResolvedValue({
      data: {
        rooms: [{ name: 'Living Room', temp_c: 20.6, humidity_pct: 59, updated_at: new Date().toISOString() }],
        plants: [{ name: 'Marble Queen', moisture_pct: 67, updated_at: new Date().toISOString() }],
      },
    });

    render(
      <MemoryRouter>
        <LiveStatus />
      </MemoryRouter>
    );

    expect(await screen.findByText('Living Room')).toBeInTheDocument();
    expect(screen.getByText('20.6°C')).toBeInTheDocument();
    expect(screen.getByText('59% humidity')).toBeInTheDocument();
    expect(screen.getByText('Marble Queen')).toBeInTheDocument();
    expect(screen.getByText('67% soil moisture')).toBeInTheDocument();
    expect(screen.getByText(/healthy/)).toBeInTheDocument();
  });
});
