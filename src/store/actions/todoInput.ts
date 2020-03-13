import * as C from '../constants';

export const setTodoInput = (payload: string) => ({
  type: C.SET_TODO_INPUT,
  payload,
} as const);

export const addTodo = (payload: string) => ({
  type: C.ADD_TODO,
  payload,
} as const);
