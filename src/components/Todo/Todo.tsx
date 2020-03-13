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
    isSelected,
  },
  handleDone,
  handlePreview,
}) => (
  <li
    className={cx(
      'todo',
      isDone && 'todo--done',
      isSelected && 'todo--selected',
    )}
    onClick={handleDone}
  >
    <div className="todo__container">
      {isDone && <div className="todo__line-through" />}
      <span className="todo__id">{`#${id}`}</span>
      <span className="todo__description">{description}</span>
      <span className="todo__candidate">{candidate}</span>
    </div>
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
