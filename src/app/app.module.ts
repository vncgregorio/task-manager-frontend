import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksDetailComponent } from './tasks/task-detail/task-detail.component';

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks',
    component: TasksComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TasksDetailComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,    
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
