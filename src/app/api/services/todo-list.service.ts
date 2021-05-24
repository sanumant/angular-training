import { TodoListItem } from './TodoListItem';
import { Injectable } from '@angular/core';

const ITEMS: TodoListItem[] = [
{
  id: 123,
  title: 'milk',
  desc: ' this is milk item',
}
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor() { 
  }

  getItems() {
    return ITEMS;
  }

  addItem(item:TodoListItem) {
    item.id = Math.floor((Math.random() * 100) + 1);
    ITEMS.push(item);
  }

  removeItem(id: number) {
    ITEMS.forEach((item, index) => {
      if(item.id === id) ITEMS.splice(index, 1);
    });
  }

  getItem(id: number) {
    return ITEMS.find(item => item.id === id);
  }
}
