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

    default:
      return state;
  }
};
