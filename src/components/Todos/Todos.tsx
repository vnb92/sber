import React, { FC } from 'react';
import { TodosList } from '../TodosList/TodosList';
import { Preview } from '../Preview/Preview';
import './Todos.scss';

export const Todos: FC = () => (
  <div className="todos">
    <TodosList />
    <Preview />
  </div>
);
