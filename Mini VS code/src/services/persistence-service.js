import {
  saveFile
}
from './indexeddb-service';

export async function persistEditorState(
  state
) {

  for (const file of state.files) {
    await saveFile(file);
  }
}