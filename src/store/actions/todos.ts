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

export const selectTodo = (payload: number) => ({
  type: C.SELECT_TODO,
  payload,
} as const);

export const resetSelectAllTodos = () => ({
  type: C.RESET_SELECT_ALL_TODOS,
} as const);
