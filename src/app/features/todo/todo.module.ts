import { TodoListComponent } from './component/TodoList/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Transition, UIRouterModule, UIView} from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditTodoComponent } from './component/container/AddEditTodo/AddEditTodo.component';
import { NgxsModule } from '@ngxs/store';
import { TodoListItemsState } from './state/todo.state';
import { TodoFormComponent } from './component/TodoForm/TodoForm.component';

export const STATES = [
    {name: 'list', url: '/list',  component: UIView, redirectTo: 'list.dashboard'},
    {name: 'list.dashboard', url: '/dashboard',  component: TodoListComponent},
    {name: 'list.add', url: '/add',  component: AddEditTodoComponent},
    //{name: 'list.edit', url: '/edit/{id:int}',  component: AddEditTodoComponent}
    {name: 'list.edit', url: '/edit/{id:int}',  component: AddEditTodoComponent, resolve: [{
      token: "todoId",
      deps: [Transition],
      resolveFn: (trans: Transition) => trans.params().id
    }]}
];

@NgModule({
  declarations: [TodoListComponent, AddEditTodoComponent, TodoFormComponent],
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: STATES}),
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forFeature([TodoListItemsState])
  ]
})
export class TodoModule { }
