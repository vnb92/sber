export namespace StateTypes {
  export type State = {
    todoInput: TodoInput;
    todos: Todos;
    todoPreview: TodoPreview;
    candidates: Candidates;
  };

  export type TodoInput = string;

  export type Todo = {
    id: number;
    description: string;
    candidate: string;
    isDone: boolean;
    isSelected: boolean;
  };

  export type Todos = Todo[];

  export type TodoPreview = {
    isOpen: boolean;
    id: number | null;
  };

  export type Candidates = string[];
}
