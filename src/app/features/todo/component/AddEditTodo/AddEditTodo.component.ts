import { TodoListItemsState } from './../../state/todo.state';
import { ChangeDetectionStrategy, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from 'src/app/api/services/TodoListItem';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-AddEditTodo',
  templateUrl: './AddEditTodo.component.html',
  styleUrls: ['./AddEditTodo.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditTodoComponent implements OnInit {


  todo$!: Observable<TodoListItem | undefined>;

  @Input()
  todoId!: number;

 // @Select(TodoListItemsState.item(this.todoId)) todo$! : Observable<TodoListItem>;

  

  constructor(
    private store: Store) {}

  ngOnInit() {
    this.todo$ = this.store.select(TodoListItemsState.item(this.todoId));
  }
}
