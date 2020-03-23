import React, { Component } from 'react'
import todoApp from './reducers';
import { createStore } from 'redux';
//引入動作物件
import { 
  setVisibilityFilter,
  VisibilityFilters } from './action';



export default class ToDoList extends Component {
  render() {
    return (
      <div>
        ToDoList
      </div>
    )
  }
}

let store = createStore(todoApp);
console.log(store.getState());
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
console.log(store.getState());




const ADD_TODO = 'ADD_TODO';
// console.log(ADD_TODO)

// full object action
// const ListOne = {
//   type: ADD_TODO,
//   text: 'have item to do',
// }

//傳進去的東西相等就可不用重複
const ListOne = function(text){
  return{
    type: ADD_TODO,
    text,
  }
}

/**
 * store.dispatch({type: 'ADD_TODO'})
 * store.dispatch(ListOne(event1text))
 * 會變成
 * store.dispatch({type: 'ADD_TODO', text: 'event1text'})
 */


//封裝
/**
 * const boundListOne = function(text){
 *  store.dispatch(ListOne(text));
 * }
 * 
 * boundListOne(event1text)
*/