import { TodoListItem } from "src/app/api/services/TodoListItem";

export class AddTodo {
    static readonly type = '[Todo] Add Todo';
    constructor(public todoItem: TodoListItem) {}
}

export class UpdateTodo {
    static readonly type = '[Todo] Update Todo';
    constructor(public todoItem: TodoListItem) {}
}

export class RemoveTodo {
    static readonly type = '[Todo] Remove Todo';
    constructor(public id: number) {}
}