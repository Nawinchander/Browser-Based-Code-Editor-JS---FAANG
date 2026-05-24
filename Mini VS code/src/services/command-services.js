import { commands }
from './command-registry';

import { fuzzyMatch }
from '../core/fuzzy-search/fuzzy-match';

export function searchCommands(query) {

  return commands.filter(command =>
    fuzzyMatch(query, command.name)
  );
}