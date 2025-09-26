import { surround } from './apptools';
import { describe, expect, it } from 'vitest';

describe('test that surround() is correctly implemented', () => {
  // 1.
  it('returns various brackets correctly', () => {
    expect(surround('test', '[]')).toBe('[test]');
    expect(surround('nnnn', '()')).toBe('(nnnn)');
    expect(surround('TEST', '{}')).toBe('{TEST}');
  });

  // 2.
  it('returns double characters correctly', () => {
    expect(surround('test', '**')).toBe('*test*');
    expect(surround('bUsBuS', '||')).toBe('|bUsBuS|');
  });
});
