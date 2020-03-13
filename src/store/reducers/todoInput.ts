import * as C from '../constants';
import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.TodoInput = '';

export const todoInput: ReducerTypes.TodoInput = (state = defaultState, action) => {
  switch (action.type) {
    case C.SET_TODO_INPUT:
      return action.payload;

    default:
      return state;
  }
};
