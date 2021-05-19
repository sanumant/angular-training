import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

    items = ['milk', 'water'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item : string) {
    this.items.push(item);
  }

  removeItem(item : string) {
  this.items.forEach((value, index) => {
        if(value==item) this.items.splice(index, 1)
    });
  }

}
