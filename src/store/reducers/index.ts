import { combineReducers } from 'redux';
import { someReducer } from './some';

export const reducer = combineReducers({
  someReducer,
});
