import * as C from '../constants';

export const todoInput = (payload: string) => ({
  type: C.TODO_INPUT,
  payload,
} as const);

export const addTodo = (payload: string) => ({
  type: C.ADD_TODO,
  payload,
} as const);
