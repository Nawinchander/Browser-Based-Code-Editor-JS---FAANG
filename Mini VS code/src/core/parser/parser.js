import * as acorn from 'acorn';

export function parse(code) {

  return acorn.parse(code, {
    ecmaVersion: 'latest'
  });
}

/// AST Parsing

// Why AST?

// Needed for:

// IntelliSense
// Auto-complete
// Error detection
// Rename symbol
// Refactoring


