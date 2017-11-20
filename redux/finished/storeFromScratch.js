const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state; // return the current state (object)

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => { // removing the listener from the array to unsubscribe listener
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  const listen = () => console.log(listeners);

  return {
    getState, dispatch, subscribe, listen,
  };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// create the store for our mini-app using the counter reducer
const store = createStore(counter);
console.log(store.getState()); // counter should be 0 (zero)

store.dispatch({ type: 'INCREMENT' }); // increment from zero to one
console.log(store.getState()); // counter is 1 (one)

const render = () => { // render function updates DOM with counter value
  document.body.innerText = store.getState();
  store.listen();
};
store.subscribe(render); // all actions re-render the DOM
render(); // render the initial state of the page/app

// listen for click event on the whole document (click anywhere on the page)
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
