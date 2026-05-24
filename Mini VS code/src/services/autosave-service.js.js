import { debounce }
from './debounce';

function saveFile(content) {
  console.log('Saving...', content);
}

export const autoSave =
  debounce(saveFile, 1000);



  editor.addEventListener(
  'input',
  e => {
    autoSave(e.target.value);
  }
);