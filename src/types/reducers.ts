import { Reducer } from 'redux';
import { StateTypes } from './state';
import { ActionTypes } from './actions';

export namespace ReducerTypes {
  export type TodoInput = Reducer<StateTypes.TodoInput, ActionTypes>;
  export type Todos = Reducer<StateTypes.Todos, ActionTypes>;
  export type TodoPreview = Reducer<StateTypes.TodoPreview, ActionTypes>;
}
