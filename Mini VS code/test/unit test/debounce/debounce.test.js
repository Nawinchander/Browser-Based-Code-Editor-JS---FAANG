import {
  debounce
}
from '../../../src/services/debounce';

import {
  vi,
  expect,
  it
}
from 'vitest';

it('debounces calls', () => {

  vi.useFakeTimers();

  const fn = vi.fn();

  const debounced =
    debounce(fn, 1000);

  debounced();
  debounced();
  debounced();

  vi.advanceTimersByTime(1000);

  expect(fn).toHaveBeenCalledTimes(1);
});