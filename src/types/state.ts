export namespace StateTypes {
  export type State = {
    todoInput: TodoInput;
    todos: Todos;
    todoPreview: TodoPreview;
  };

  export type TodoInput = string;

  export type Todo = {
    id: number;
    description: string;
    isDone: boolean;
  };

  export type Todos = Todo[];

  export type TodoPreview = {
    isOpen: boolean;
    todo: Todo | null;
  };
}
