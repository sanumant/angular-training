
import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/api/services/todo-list.service';
import { TodoListItem } from 'src/app/api/services/TodoListItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {

  items: TodoListItem[] | undefined;

  constructor(private todoListService: TodoListService) {
    this.items = todoListService.getItems();
   }

  ngOnInit(): void {
  }
  
  removeItem(id: number) {
    this.todoListService.removeItem(id);
  }

}
