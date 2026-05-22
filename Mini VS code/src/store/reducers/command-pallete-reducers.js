const initialState = {
  visible: false,
  query: '',
  filteredCommands: []
};

export function commandPaletteReducer(
  state = initialState,
  action
) {

  switch (action.type) {

    case 'OPEN_PALETTE':
      return {
        ...state,
        visible: true
      };

    case 'CLOSE_PALETTE':
      return {
        ...state,
        visible: false
      };

    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      };

    case 'SET_RESULTS':
      return {
        ...state,
        filteredCommands: action.payload
      };

    default:
      return state;
  }
}