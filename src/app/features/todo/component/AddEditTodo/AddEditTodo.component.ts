import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from 'src/app/api/services/todo-list.service';
import { TodoListItem } from 'src/app/api/services/TodoListItem';

@Component({
  selector: 'app-AddEditTodo',
  templateUrl: './AddEditTodo.component.html',
  styleUrls: ['./AddEditTodo.component.sass']
})
export class AddEditTodoComponent implements OnInit {

  @Input()
  todo: TodoListItem | undefined;

  todoForm= this.fb.group({
    title: ['', Validators.required],
    desc: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private todoListService: TodoListService) {
    this.todoForm.patchValue({
      title: this.todo?.title,
      desc: this.todo?.desc
    });
   }

  ngOnInit() {
  }

  addNewItem() {
    console.log(this.todoForm.value);
    this.todoListService.addItem(this.todoForm.value);
  }

}
