import React, { Component, Dispatch, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../Todo/Todo';
import { actions } from '../../store/actions';
import { StateTypes } from '../../types/state';
import { ActionTypes } from '../../types/actions';
import './TodosList.scss';

type TProps = {
  todos: StateTypes.Todos;
  preview: StateTypes.TodoPreview;
  toggleTodoStatus: (id: number) => void;
  changePreviewedTodo: (todo: number) => void;
  selectTodo: (id: number) => void;
  closePreview: () => void;
  resetSelectAllTodos: () => void;
  openPreview: () => void;
};

class TodosListComponent extends Component<TProps> {
  handleDone = (todoId: number) => () => {
    const { toggleTodoStatus } = this.props;
    toggleTodoStatus(todoId);
  };

  handlePreview = (todo: StateTypes.Todo) => (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const {
      preview,
      changePreviewedTodo,
      selectTodo,
      closePreview,
      resetSelectAllTodos,
      openPreview,
    } = this.props;

    selectTodo(todo.id);
    changePreviewedTodo(todo.id);

    if (!preview.isOpen) {
      openPreview();
      return;
    }

    if (preview.isOpen && preview.id === todo.id) {
      closePreview();
      resetSelectAllTodos();
    }
  };

  render() {
    const { todos } = this.props;

    return (
      <>
        {todos.length
          ? (
            <ul className="todos-list">
              {todos.map(todo => (
                <Todo
                  todo={todo}
                  handleDone={this.handleDone(todo.id)}
                  handlePreview={this.handlePreview(todo)}
                />
              ))}
            </ul>
          )
          : null}
      </>
    );
  }
}

export const TodosList = connect(
  (state: StateTypes.State) => ({
    todos: state.todos,
    preview: state.todoPreview,
  }),
  (dispatch: Dispatch<ActionTypes>) => ({
    toggleTodoStatus: (id: number) => dispatch(actions.toggleTodoStatus(id)),
    changePreviewedTodo: (id: number) => dispatch(actions.changePreviewedTodo(id)),
    selectTodo: (id: number) => dispatch(actions.selectTodo(id)),
    closePreview: () => dispatch(actions.closePreview()),
    resetSelectAllTodos: () => dispatch(actions.resetSelectAllTodos()),
    openPreview: () => dispatch(actions.openPreview()),
  }),
)(TodosListComponent);
