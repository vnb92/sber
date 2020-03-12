import React, { FC } from 'react';
import { Todo } from '../Todo/Todo';
import { StateTypes } from '../../types/state';
import './TodosList.scss';

const mockTodo: StateTypes.Todo = {
  id: 1,
  description: 'ljkdhfkgdhfkghd',
  isDone: false,
};

export const TodosList: FC = () => (
  <ul className="todos-list">
    <Todo todo={mockTodo} />
    <Todo todo={mockTodo} />
    <Todo todo={mockTodo} />
  </ul>
);
