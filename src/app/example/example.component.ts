import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem } from '../api/services/TodoListItem';

export interface Config {
position: string
};

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {

  @Input()
  config: any;

  @Input()
  items: Observable<TodoListItem> | undefined;
  _items: TodoListItem[] | undefined;

  constructor() { 
  }

  ngOnInit(): void {
    console.log('this is ngOninit =>' + this.config.position);

    this.items?.subscribe(items => {
        this._items?.push(items);
    });
  }

  get runCD() {
    console.log('Checking the view');
    return true;
  }

}
