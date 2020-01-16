import {createStore} from 'redux';
import {todolist} from './reducer';
  let store = createStore(todolist);
export default store;

