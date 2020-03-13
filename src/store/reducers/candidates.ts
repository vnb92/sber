import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Candidates = [];

export const candidates: ReducerTypes.Candidates = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
