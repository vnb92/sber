import { combineReducers } from 'redux';
import { todoInput } from './todoInput';
import { todos } from './todos';
import { todoPreview } from './todoPreview';
import { candidates } from './candidates';

export const reducer = combineReducers({
  todoInput,
  todos,
  todoPreview,
  candidates,
});
