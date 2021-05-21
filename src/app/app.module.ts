import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UIRouterModule} from '@uirouter/angular';
import { AppComponent } from './app.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AlertModule } from './features/alert/alert.module';
import { TodoListModule } from './features/todo-list/todo-list.module';
import { AboutModule } from './features/about/about.module';

const STATES = [
    {name: 'todo.**', url: '/todo-list',  loadChildren: () => import('./features/todo-list/todo-list.module').then(mod => mod.TodoListModule)},
    {name: 'about.**', url: '/about-page',  loadChildren: () => import('./features/about/about.module').then(mod => mod.AboutModule)},
    {name: 'alert.**', url: '/alert-page',  loadChildren: () => import('./features/alert/alert.module').then(mod => mod.AlertModule)},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    AboutModule,
    AlertModule,
    TodoListModule,
    UIRouterModule.forRoot({states: STATES}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
