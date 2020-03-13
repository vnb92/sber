import * as C from '../constants';
import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Todos = [];

export const todos: ReducerTypes.Todos = (state = defaultState, action) => {
  switch (action.type) {
    case C.ADD_TODO:
      return [
        ...state,
        action.payload,
      ];

    case C.TOGGLE_TODO_STATUS:
      return state.map(todo => (
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      ));

    case C.SELECT_TODO:
      return state.map(todo => {
        const isSelected = todo.id === action.payload;

        return ({
          ...todo,
          isSelected,
        });
      });

    case C.RESET_SELECT_ALL_TODOS:
      return state.map(todo => ({
        ...todo,
        isSelected: false,
      }));

    default:
      return state;
  }
};
