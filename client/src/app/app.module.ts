import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { BoardService } from './board/board.service';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BoardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
