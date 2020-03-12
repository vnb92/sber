import { combineReducers } from 'redux';
import { todoInput } from './todoInput';
import { todos } from './todos';
import { todoPreview } from './todoPreview';

export const reducer = combineReducers({
  todoInput,
  todos,
  todoPreview,
});
