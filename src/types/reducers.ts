import { Reducer } from 'redux';
import { StateTypes } from './state';
import { ActionTypes } from './actions';

export namespace ReducerTypes {
  export type someReducer = Reducer<any, any>;
}
