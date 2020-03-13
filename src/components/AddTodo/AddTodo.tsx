import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
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
  addTodo: (todo: StateTypes.Todo) => void
};

class AddTodoComponent extends Component<TProps> {
  handleInput = (e: any) => {
    const { setTodoInput } = this.props;
    setTodoInput(e.target.value);
  };

  handleAddTodo = () => {
    const {
      todos,
      todoInput,
      candidate,
      addTodo,
    } = this.props;

    const todo: StateTypes.Todo = {
      id: todos.length + 1,
      isDone: false,
      candidate,
      description: todoInput,
    };
    addTodo(todo);
  };

  handleKeyUp = (e: any) => {
    if (e.key !== 'Enter') return;
    this.handleAddTodo();
  };

  render() {
    const { todoInput } = this.props;

    return (
      <div className="add-todo">
        <Input
          type="text"
          placeholder="Type..."
          onInput={this.handleInput}
          onKeyUp={this.handleKeyUp}
          value={todoInput}
        />
        <Button
          type="button"
          onClick={this.handleAddTodo}
        >
          Add todo
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
  }),
)(AddTodoComponent);
