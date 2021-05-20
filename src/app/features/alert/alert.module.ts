import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './component/alert.component';
import {UIRouterModule} from '@uirouter/angular';

const STATES = [
    {name: 'alert', url: '/alert-page',  component: AlertComponent}
];

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: STATES})
  ]
})
export class AlertModule { }
