import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { BoardService } from './board/board.service';
import { ListService } from './list/list.service';
import { TaskService } from './task/task.service';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BoardService,
    ListService,
    TaskService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
