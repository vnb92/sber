import * as C from '../constants';

export const setTodoInput = (payload: string) => ({
  type: C.SET_TODO_INPUT,
  payload,
} as const);

export const resetTodoInput = () => ({
  type: C.RESET_TODO_INPUT,
} as const);
