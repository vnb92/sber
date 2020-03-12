import React, { FC } from 'react';
import cx from 'classnames';
import { Button } from '../Button/Button';
import { StateTypes } from '../../types/state';
import './Todo.scss';

type TProps = {
  todo: StateTypes.Todo
};

export const Todo: FC<TProps> = ({ todo: { id, description } }) => (
  <li
    className={cx('todo')}
  >
    <span className="todo__id">{`#${id}`}</span>
    <span className="todo__description">{description}</span>
    <div className="todo__buttons">
      <Button />
      <Button />
      <Button>&gt;&gt;</Button>
    </div>
  </li>
);
