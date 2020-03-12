import React, { FC } from 'react';
import './AddTodo.scss';

export const AddTodo: FC = () => (
  <div className="add-todo">
    <input type="text" />
    <button type="button">add todo</button>
  </div>
);
