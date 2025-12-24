import axios from 'axios';
import { getBlogInfo } from './api';

jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() }
      }
    }))
  };
});

// Since apiClient is created at module level, we need to handle it carefully.
// Let's try another approach: mock the methods on the default export of the module.
import apiClient from './api';

describe('API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getBlogInfo calls the correct endpoint without ID', async () => {
    const mockData = [{ id: 1, title: 'Test' }];
    apiClient.get = jest.fn().mockResolvedValue({ data: mockData });

    const result = await getBlogInfo();
    expect(apiClient.get).toHaveBeenCalledWith('/get_blog_info');
    expect(result).toEqual(mockData);
  });

  test('getBlogInfo calls the correct endpoint with ID', async () => {
    const mockData = { id: 1, title: 'Test' };
    apiClient.get = jest.fn().mockResolvedValue({ data: mockData });

    const result = await getBlogInfo(1);
    expect(apiClient.get).toHaveBeenCalledWith('/get_blog_info?blog_id=1');
    expect(result).toEqual(mockData);
  });

  test('getBlogInfo throws on error', async () => {
    apiClient.get = jest.fn().mockRejectedValue(new Error('Network error'));

    await expect(getBlogInfo()).rejects.toThrow('Network error');
  });
});
