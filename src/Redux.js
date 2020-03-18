import React, { Component } from 'react';
import { createStore } from 'redux';

export default class Redux extends Component {
  render() {
    return (
      <div>
        redux
      </div>
    )
  }
}

// reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// data store;
let store = createStore(counter);

store.subscribe(() => {
  console.warn(store.getState());
});

console.warn(store.getState()); // 0

store.dispatch({type: 'INCREMENT'}); // + 1
store.dispatch({type: 'INCREMENT'}); // + 1
store.dispatch({type: 'INCREMENT'}); // + 1

// console.warn(store.getState()); // 3

store.dispatch({type: 'DECREMENT'}); // - 1

// console.warn(store.getState()); // 2

