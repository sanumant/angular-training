import { AddTodo, UpdateTodo } from './../../state/todo.actions';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '@uirouter/core';
import { TodoListService } from 'src/app/api/services/todo-list.service';
import { TodoListItem } from 'src/app/api/services/TodoListItem';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoListItemsState } from '../../state/todo.state';
import { state } from '@angular/animations';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-AddEditTodo',
  templateUrl: './AddEditTodo.component.html',
  styleUrls: ['./AddEditTodo.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditTodoComponent implements OnInit {

  @Input()
  todo: TodoListItem | undefined;

  todo$: Observable<TodoListItem> | undefined;

  @Input()
  todoId: number | undefined;

 // @Select(TodoListItemsState.item(this.todoId)) todo$! : Observable<TodoListItem>;

  todoForm= this.fb.group({
    id: [''],
    title: ['', Validators.required],
    desc: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private todoListService: TodoListService, 
    private stateService: StateService,
    private store: Store) {}

  ngOnInit() {
    this.todo$ = this.store.select(state => state.item(this.todoId));
    this.todo$.subscribe(i => console.log("this is the item we are looking for ==>", i));
      /*this.todoFo
      rm.patchValue({
      title: this.todo?.title,
      desc: this.todo?.desc});*/
  }

  addOrUpdateItem() {
    if(this.todo == null) {
      this.store.dispatch(new AddTodo(this.todoForm.value));
      //this.todoListService.addItem(this.todoForm.value);
    } else {
      this.todoForm.patchValue({
          id: this.todo.id
      });
      this.store.dispatch(new UpdateTodo(this.todoForm.value));
     //his.todoListService.updateItem(this.todoForm.value);
    }

    //navigation to states
    this.stateService.go('list.dashboard');
  }

}
