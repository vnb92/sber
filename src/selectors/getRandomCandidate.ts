import { StateTypes } from '../types/state';

type TGetRandomCandidate = (state: StateTypes.State) => string;

export const getRandomCandidate: TGetRandomCandidate = state => {
  const maxIndex = state.candidates.length;
  const randomIndex = Math.round(Math.random() * maxIndex);

  return state.candidates[randomIndex];
};
