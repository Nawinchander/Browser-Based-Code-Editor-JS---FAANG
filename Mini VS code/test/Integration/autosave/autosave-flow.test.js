import {
  autoSave
}
from '../../../src/services/autosave-service';

import {
  saveFile
}
from '../../../src/services/indexeddb-service';

import { vi } from 'vitest';

vi.mock(
  '../../../src/services/indexeddb-service'
);

it('autosaves file', async () => {

  autoSave('hello');

  expect(saveFile)
    .toHaveBeenCalled();
});

