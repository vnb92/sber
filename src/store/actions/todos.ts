import * as C from '../constants';
import { StateTypes } from '../../types/state';

export const addTodo = (payload: StateTypes.Todo) => ({
  type: C.ADD_TODO,
  payload,
} as const);

export const toggleTodoStatus = (payload: number) => ({
  type: C.TOGGLE_TODO_STATUS,
  payload,
} as const);
