import * as C from '../constants';
import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.TodoPreview = {
  isOpen: false,
  todo: null,
};

export const todoPreview: ReducerTypes.TodoPreview = (state = defaultState, action) => {
  switch (action.type) {
    case C.OPEN_PREVIEW:
      return {
        ...state,
        isOpen: true,
      };

    case C.CLOSE_PREVIEW:
      return {
        ...state,
        isOpen: false,
      };

    case C.CHANGE_PREVIEWED_TODO:
      return {
        ...state,
        todo: action.payload,
      };

    default:
      return state;
  }
};
