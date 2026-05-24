import {
  openPalette
} from '../../store/actions/command-palette-actions';

export function registerPaletteShortcut(
  dispatch
) {

  document.addEventListener(
    'keydown',
    e => {

      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key === 'P'
      ) {

        e.preventDefault();

        dispatch(openPalette());
      }
    }
  );
}