export function openTab(file) {

  return {
    type: 'OPEN_TAB',
    payload: file
  };
}

export function closeTab(id) {

  return {
    type: 'CLOSE_TAB',
    payload: id
  };
}

export function setActiveTab(id) {

  return {
    type: 'SET_ACTIVE_TAB',
    payload: id
  };
}