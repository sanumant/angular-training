import { TodoListComponent } from './component/TodoList/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Transition, UIRouterModule, UIView} from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditTodoComponent } from './component/AddEditTodo/AddEditTodo.component';
import { TodoListService } from 'src/app/api/services/todo-list.service';
import { NgxsModule } from '@ngxs/store';
import { TodoListItemsState } from './state/todo.state';
import { filter, map } from 'rxjs/operators';

export const STATES = [
    {name: 'list', url: '/list',  component: UIView, redirectTo: 'list.dashboard'},
    {name: 'list.dashboard', url: '/dashboard',  component: TodoListComponent},
    {name: 'list.add', url: '/add',  component: AddEditTodoComponent},
    {name: 'list.edit', url: '/edit/{id:int}',  component: AddEditTodoComponent, resolve: [{
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
    FormsModule,
    NgxsModule.forFeature([TodoListItemsState])
  ]
})
export class TodoModule { }
