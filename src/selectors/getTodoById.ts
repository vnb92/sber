import { StateTypes } from '../types/state';

type TGetTodoById = (state: StateTypes.State) => StateTypes.Todo | undefined;

export const getTodoById: TGetTodoById = state => {
  const previewdId = state.todoPreview.id;
  return state.todos.find(todo => todo.id === previewdId);
};
