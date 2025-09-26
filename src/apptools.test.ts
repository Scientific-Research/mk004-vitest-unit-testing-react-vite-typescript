import { surround } from './apptools';
import { describe, expect, it } from 'vitest';

describe('test that surround() is correctly implemented', () => {
  it('returns various brackets correctly', () => {
    expect(surround('test', '[]')).toBe('[test]');
    expect(surround('nnnn', '()')).toBe('(nnnn)');
    expect(surround('TEST', '{}')).toBe('{TEST}');
  });
});
