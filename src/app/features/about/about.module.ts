import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './component/about.component';
import {UIRouterModule} from '@uirouter/angular';

const STATES = [
    {name: 'about', url: '/about-page',  component: AboutComponent}
];

@NgModule({
  declarations: [
      AboutComponent
    ],
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: STATES})
  ]
})
export class AboutModule { }
