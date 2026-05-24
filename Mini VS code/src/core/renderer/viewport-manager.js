export function getViewportData(
  editor
) {

  return {
    scrollTop: editor.scrollTop,
    viewportHeight: editor.clientHeight
  };
}


