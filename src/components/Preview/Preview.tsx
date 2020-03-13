import React, { FC } from 'react';
import { connect } from 'react-redux';
import { getTodoById } from '../../selectors/getTodoById';
import { StateTypes } from '../../types/state';
import './Preview.scss';

type TProps = {
  preview: StateTypes.TodoPreview;
  todos: StateTypes.Todos;
  todo: StateTypes.Todo | undefined;
};

export const PreviewComponent: FC<TProps> = ({ preview, todos, todo }) => (
  <>
    {(todos.length && preview.isOpen)
      ? (
        <div className="preview">
          <span className="preview__id">{`#${todo?.id}`}</span>
          <span className="preview__description">{todo?.description}</span>
          <span className="preview__candidate">{todo?.candidate}</span>
          <span className="preview__isDone">{`${todo?.isDone}`}</span>
        </div>
      )
      : null}
  </>
);

export const Preview = connect(
  (state: StateTypes.State) => ({
    preview: state.todoPreview,
    todo: getTodoById(state),
    todos: state.todos,
  }),
)(PreviewComponent);
