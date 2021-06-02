import { BehaviorSubject, Observable, of } from 'rxjs';
import { TodoListItem } from './TodoListItem';
import { Injectable } from '@angular/core';
import { filter, find, map, tap } from 'rxjs/operators';

const ITEMS: TodoListItem[] = [];
const items: BehaviorSubject<TodoListItem[]> = new BehaviorSubject(ITEMS);

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor() {}

  getItems(): Observable<TodoListItem[]> {
    return items.pipe(
      tap(item => console.log("getItems  call ==> ", item))
    );
  }

  addItem(item:TodoListItem): Observable<TodoListItem> {
    item.id = Math.floor((Math.random() * 100) + 1);
    ITEMS.push(item);
    items.next(ITEMS);
    return this.getItem(item.id);
  }

  removeItem(id: number) {
    ITEMS.forEach((item, index) => {
          if(item.id === id) ITEMS.splice(index, 1);
        });
  }

  getItem(id: number): Observable<any> {
    return items.pipe(tap(item => console.log("getItem call=>", item)),
      map(items => items.find(i => i.id === id))
    );
  }

  updateItem(updateItem: TodoListItem): Observable<TodoListItem> {
   let index = ITEMS.findIndex(item => item.id == updateItem.id);
    ITEMS[index] = updateItem;
    return this.getItem(updateItem.id);
  }
}
