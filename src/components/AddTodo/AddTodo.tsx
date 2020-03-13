import React, { Component, Dispatch, KeyboardEvent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { i18next } from '../../i18n';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { actions } from '../../store/actions';
import { StateTypes } from '../../types/state';
import { ActionTypes } from '../../types/actions';
import { getRandomCandidate } from '../../selectors/getRandomCandidate';
import './AddTodo.scss';

type TProps = {
  todoInput: StateTypes.TodoInput;
  todos: StateTypes.Todos;
  candidate: string;
  setTodoInput: (value: string) => void;
  addTodo: (todo: StateTypes.Todo) => void;
  resetTodoInput: () => void;
};

class AddTodoComponent extends Component<TProps> {
  handleInput = (e: SyntheticEvent) => {
    const { setTodoInput } = this.props;
    const target = e.target as HTMLInputElement;
    setTodoInput(target.value);
  };

  handleAddTodo = () => {
    const {
      todos,
      todoInput,
      candidate,
      addTodo,
      resetTodoInput,
    } = this.props;

    const todo: StateTypes.Todo = {
      id: todos.length + 1,
      isDone: false,
      isSelected: false,
      candidate,
      description: todoInput,
    };
    addTodo(todo);
    resetTodoInput();
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    this.handleAddTodo();
  };

  render() {
    const { todoInput } = this.props;

    return (
      <div className="add-todo">
        <Input
          type="text"
          placeholder={i18next.t('enterTodo')}
          onInput={this.handleInput}
          onKeyUp={this.handleKeyUp}
          value={todoInput}
        />
        <Button
          type="button"
          onClick={this.handleAddTodo}
        >
          {i18next.t('add')}
        </Button>
      </div>
    );
  }
}

export const AddTodo = connect(
  (state: StateTypes.State) => ({
    todoInput: state.todoInput,
    todos: state.todos,
    candidate: getRandomCandidate(state),
  }),
  (dispatch: Dispatch<ActionTypes>) => ({
    setTodoInput: (value: string) => dispatch(actions.setTodoInput(value)),
    addTodo: (todo: StateTypes.Todo) => dispatch(actions.addTodo(todo)),
    resetTodoInput: () => dispatch(actions.resetTodoInput()),
  }),
)(AddTodoComponent);
