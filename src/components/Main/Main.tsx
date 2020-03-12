import React, { FC } from 'react';
import { AddTodo } from '../AddTodo/AddTodo';
import { Todos } from '../Todos/Todos';
import './Main.scss';

export const Main: FC = () => (
  <main className="main">
    <AddTodo />
    <Todos />
  </main>
);
