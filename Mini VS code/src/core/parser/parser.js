import * as acorn from 'acorn';

export function parse(code) {

  return acorn.parse(code, {
    ecmaVersion: 'latest'
  });
}

