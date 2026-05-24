const initialState = {
  currentTheme: 'dark'
};

export function themeReducer(
  state = initialState,
  action
) {

  switch (action.type) {

    case 'SET_THEME':

      return {
        ...state,
        currentTheme: action.payload
      };

    default:
      return state;
  }
}


