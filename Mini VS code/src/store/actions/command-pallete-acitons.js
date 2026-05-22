export const openPalette = () => ({
  type: 'OPEN_PALETTE'
});

export const closePalette = () => ({
  type: 'CLOSE_PALETTE'
});

export const setQuery = query => ({
  type: 'SET_QUERY',
  payload: query
});

export const setResults = results => ({
  type: 'SET_RESULTS',
  payload: results
});