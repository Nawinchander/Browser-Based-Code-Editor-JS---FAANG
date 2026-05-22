export function rankMatches(
  input,
  commands
) {

  return commands.sort((a, b) => {

    const aScore =
      a.name.startsWith(input)
        ? 2
        : 1;

    const bScore =
      b.name.startsWith(input)
        ? 2
        : 1;

    return bScore - aScore;
  });
}