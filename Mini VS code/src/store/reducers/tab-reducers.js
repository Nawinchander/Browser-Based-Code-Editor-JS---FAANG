const initialState = {
  openTabs: [],
  activeTab: null
};

export function tabsReducer(
  state = initialState,
  action
) {

  switch (action.type) {

    case 'OPEN_TAB':

      const exists = state.openTabs.find(
        tab => tab.id === action.payload.id
      );

      if (exists) {
        return {
          ...state,
          activeTab: action.payload.id
        };
      }

      return {
        ...state,

        openTabs: [
          ...state.openTabs,
          action.payload
        ],

        activeTab: action.payload.id
      };

    case 'CLOSE_TAB':

      return {
        ...state,

        openTabs: state.openTabs.filter(
          tab => tab.id !== action.payload
        )
      };

    case 'SET_ACTIVE_TAB':

      return {
        ...state,
        activeTab: action.payload
      };

    default:
      return state;
  }
}
