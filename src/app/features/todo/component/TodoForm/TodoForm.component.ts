import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { StateService } from '@uirouter/core';
import { TodoListItem } from 'src/app/api/services/TodoListItem';
import { AddTodo, UpdateTodo} from '../../state/todo.actions';
;

@Component({
  selector: 'app-TodoForm',
  templateUrl: './TodoForm.component.html',
  styleUrls: ['./TodoForm.component.sass']
})
export class TodoFormComponent implements OnInit {

  @Input()
  todo: any;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private store: Store) { }

  ngOnInit() {
    this.todoForm.patchValue({
      title: this.todo.title,
      desc: this.todo.desc
  });
  }

  todoForm= this.fb.group({
    id: [''],
    title: ['', Validators.required],
    desc: ['', Validators.required]
  });

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
