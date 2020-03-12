import { StateTypes } from '../types/state';

export const MockState: StateTypes.State = {
  todoInput: '',
  todos: [],
  todoPreview: {
    isOpen: false,
    todo: null,
  },
};
