import { CalculateReadTime } from './WordCount';

describe('CalculateReadTime', () => {
  test('returns "0 min read" for empty or null text', () => {
    expect(CalculateReadTime('')).toBe('0 min read');
    expect(CalculateReadTime(null)).toBe('0 min read');
  });

  test('calculates correct read time for short text', () => {
    const text = 'This is a short text.';
    // 5 words / 200 = 0.025 -> ceil = 1
    expect(CalculateReadTime(text)).toBe('1 min read');
  });

  test('calculates correct read time for longer text', () => {
    const text = 'word '.repeat(300);
    // 300 words / 200 = 1.5 -> ceil = 2
    expect(CalculateReadTime(text)).toBe('2 min read');
  });
});
