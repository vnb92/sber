import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { actions } from '../../store/actions';
import { StateTypes } from '../../types/state';
import { ActionTypes } from '../../types/actions';
import './AddTodo.scss';

type TProps = {
  todoInput: string;
  setTodoInput: (value: string) => void
};

class AddTodoComponent extends Component<TProps> {
  handleInput = (e: any) => {
    const { setTodoInput } = this.props;
    setTodoInput(e.target.value);
  };

  render() {
    const { todoInput } = this.props;

    return (
      <div className="add-todo">
        <Input
          type="text"
          placeholder="Type..."
          onInput={this.handleInput}
          value={todoInput}
        />
        <Button type="button">
          Add todo
        </Button>
      </div>
    );
  }
}

export const AddTodo = connect(
  (state: StateTypes.State) => ({
    todoInput: state.todoInput,
  }),
  (dispatch: Dispatch<ActionTypes>) => ({
    setTodoInput: (value: string) => dispatch(actions.setTodoInput(value)),
  }),
)(AddTodoComponent);
