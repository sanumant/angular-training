import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

  @Input()
  text: string | undefined;

  @Output()
  output = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(msg: string) {
    this.output.emit(msg);
  }

}
