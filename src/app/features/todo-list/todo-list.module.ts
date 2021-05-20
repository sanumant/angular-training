import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './component/todo-list.component';
import {UIRouterModule} from '@uirouter/angular';

const STATES = [
    {name: 'todo', url: '/todo-list',  component: TodoListComponent}
];

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: STATES})
  ]
})
export class TodoListModule { }
