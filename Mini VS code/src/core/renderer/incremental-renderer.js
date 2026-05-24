export function incrementalRender({
  lines,
  scrollTop,
  lineHeight,
  viewportHeight
}) {

  const startLine =
    Math.floor(scrollTop / lineHeight);

  const visibleLines =
    Math.ceil(
      viewportHeight / lineHeight
    );

  const endLine =
    startLine + visibleLines;

  return lines.slice(
    startLine,
    endLine
  );
}