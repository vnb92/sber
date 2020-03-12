import * as C from '../constants';

export const toggleTodoStatus = (payload: number) => ({
  type: C.TOGGLE_TODO_STATUS,
  payload,
} as const);
