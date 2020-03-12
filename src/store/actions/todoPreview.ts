import * as C from '../constants';
import { StateTypes } from '../../types/state';

export const openPreview = () => ({
  type: C.OPEN_PREVIEW,
} as const);

export const closePreview = () => ({
  type: C.CLOSE_PREVIEW,
} as const);

export const changePreviewedTodo = (payload: StateTypes.Todo) => ({
  type: C.CHANGE_PREVIEWED_TODO,
  payload,
} as const);
