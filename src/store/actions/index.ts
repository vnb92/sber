import * as todoInput from './todoInput';
import * as todos from './todos';
import * as todoPreview from './todoPreview';

export const actions = {
  ...todoInput,
  ...todos,
  ...todoPreview,
};
