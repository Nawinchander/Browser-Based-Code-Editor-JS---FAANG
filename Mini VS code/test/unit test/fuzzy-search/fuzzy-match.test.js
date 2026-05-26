import {
  fuzzyMatch
}
from '../../../src/core/fuzzy-search/fuzzy-match';

import {
  describe,
  it,
  expect
}
from 'vitest';

describe('fuzzyMatch', () => {

  it('matches abbreviated text', () => {

    const result =
      fuzzyMatch(
        'opfl',
        'Open File'
      );

    expect(result).toBe(true);
  });

  it('fails invalid match', () => {

    const result =
      fuzzyMatch(
        'xyz',
        'Open File'
      );

    expect(result).toBe(false);
  });
});