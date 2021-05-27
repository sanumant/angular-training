import { Config } from './example/example.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-training';
  config: any;

  constructor() { 
    this.config = {
      position: 'top'
    };
  }

  showChild(text: string) {
    alert(text);
  }

  onClick() {
    this.config = {
      position: 'bottom'
    };
  }
}
