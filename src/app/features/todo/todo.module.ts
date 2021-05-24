import { TodoListComponent } from './component/TodoList/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Transition, UIRouterModule} from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditTodoComponent } from './component/AddEditTodo/AddEditTodo.component';
import { TodoListService } from 'src/app/api/services/todo-list.service';

export const STATES = [
    {name: 'list', url: '/list',  component: TodoListComponent},
    {name: 'add', url: '/add',  component: AddEditTodoComponent},
    {name: 'edit', url: '/edit/:id',  component: AddEditTodoComponent, resolve: [{
      token: "todo",
      deps: [Transition, TodoListService],
      resolveFn: (trans: Transition, todoListService: TodoListService) => todoListService.getItem(trans.params().id)
    }]}
];

@NgModule({
  declarations: [TodoListComponent, AddEditTodoComponent],
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: STATES}),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
