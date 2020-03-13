import { StateTypes } from '../types/state';

export const MockState: StateTypes.State = {
  todoInput: '',
  todos: [],
  todoPreview: {
    isOpen: false,
    id: null,
  },
  candidates: [
    'Иванов С.П.',
    'Петров И.П.',
    'Сидоров В.К.',
  ],
};
