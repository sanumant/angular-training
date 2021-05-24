import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UIRouterModule} from '@uirouter/angular';
import { AppComponent } from './app.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const STATES = [
    {name: 'list.**', url: '/list',  loadChildren: () => import('./features/todo/todo.module').then(mod => mod.TodoModule)},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    UIRouterModule.forRoot({states: STATES}),
    ReactiveFormsModule,
    FormsModule
  ],
  //add services here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
