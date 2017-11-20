import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
// counter is the reducer (function) that manages state updates:
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

const Counter = ({ value, onIncrement, onDecrement }) =>
  ([<h1 key="h1">{value}</h1>,
    <button key="-" onClick={onDecrement}>-</button>,
    <button key="+" onClick={onIncrement}>+</button>]);
const render = () => { // render function updates DOM with counter value
  ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />, document.getElementById('root'));
};
store.subscribe(render); // all actions re-render the DOM
render();
