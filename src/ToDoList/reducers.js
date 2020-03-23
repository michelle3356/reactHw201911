//引入動作中的常數
import { 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO
} from './action'
import { combineReducers } from 'redux';



//定義預設內容,只是在剛開始時設定方便製作function
// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: [],
// }


//visibility reducer
function visibilityFilter(state=VisibilityFilters.SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      // 改變initial以後就不需要展開state
      // ...state,

      //在action裡面有定義傳進來值為filter
      return action.filter;
      
      /**也可以寫成 
       * state.visibilityFilter = action.filter;
       * return state;
       * */
    default:
      return state;
  }
}

//todo reducer
function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return[
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ]
    default:
      return state;
  }

}


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;

