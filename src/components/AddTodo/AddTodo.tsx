import React, { FC } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './AddTodo.scss';

export const AddTodo: FC = () => (
  <div className="add-todo">
    <Input
      type="text"
      placeholder="Type..."
    />
    <Button type="button">
      Add todo
    </Button>
  </div>
);
