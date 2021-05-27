import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/api/services/todo-list.service';
import { TodoListItem } from 'src/app/api/services/TodoListItem';
import { RemoveTodo } from '../../state/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoListItem[]>;

  constructor(
    private todoListService: TodoListService,
    private store: Store) {
    this.items$ = todoListService.getItems();
   }

  ngOnInit(): void {
  }

  removeItem(id: number) {
    this.store.dispatch(new RemoveTodo(id));
    //this.todoListService.removeItem(id);
  }

  get runChangeDetection() {
    console.log('checking view');
    return '';
  }

}
