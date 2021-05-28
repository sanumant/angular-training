import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UIRouterModule} from '@uirouter/angular';
import { AppComponent } from './app.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ExampleComponent } from './example/example.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

const STATES = [
    {name: 'list.**', url: '/list',  loadChildren: () => import('./features/todo/todo.module').then(mod => mod.TodoModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    UIRouterModule.forRoot({states: STATES}),
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  //add services here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
