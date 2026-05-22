import {
  closeTab,
  setActiveTab
} from '../../store/actions/tabs-actions';

export function registerTabEvents(dispatch) {

  document.addEventListener('click', e => {

    // Close tab
    if (e.target.dataset.close) {

      dispatch(
        closeTab(
          e.target.dataset.close
        )
      );
    }

    // Switch tab
    if (e.target.dataset.id) {

      dispatch(
        setActiveTab(
          e.target.dataset.id
        )
      );
    }
  });
}