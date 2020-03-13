import React, { FC, SyntheticEvent } from 'react';
import cx from 'classnames';
import { Button } from '../Button/Button';
import { StateTypes } from '../../types/state';
import './Todo.scss';

type TProps = {
  todo: StateTypes.Todo;
  handleDone: () => void;
  handlePreview: (e: SyntheticEvent<HTMLButtonElement>) => void;
};

export const Todo: FC<TProps> = ({
  todo: {
    id,
    description,
    candidate,
    isDone,
  },
  handleDone,
  handlePreview,
}) => (
  <li
    className={cx('todo', isDone && 'todo--done')}
    onClick={handleDone}
  >
    <span className="todo__id">{`#${id}`}</span>
    <span className="todo__description">{description}</span>
    <span className="todo__candidate">{candidate}</span>
    <div className="todo__buttons">
      <Button />
      <Button />
      <Button
        onClick={handlePreview}
      >
        &gt;&gt;
      </Button>
    </div>
  </li>
);
