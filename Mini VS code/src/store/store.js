const store = {
  state: {
    files: [],
    activeFile: null
  },

  listeners: []
};

export function subscribe(listener) {
  store.listeners.push(listener);
}

export function setState(newState) {

  store.state = {
    ...store.state,
    ...newState
  };

  store.listeners.forEach(l => l(store.state));
}

export function getState() {
  return store.state;
}