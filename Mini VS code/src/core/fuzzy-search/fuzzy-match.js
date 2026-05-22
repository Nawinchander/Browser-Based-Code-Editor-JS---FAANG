export function fuzzyMatch(
  input,
  target
) {

  input = input.toLowerCase();
  target = target.toLowerCase();

  let i = 0;

  for (const char of target) {

    if (char === input[i]) {
      i++;
    }
  }

  return i === input.length;
}


// ip  opfl

// op Open File

