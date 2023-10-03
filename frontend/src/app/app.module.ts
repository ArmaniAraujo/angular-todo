import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AddItemInputComponent } from './add-item-input/add-item-input.component';

import { FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    FrontPageComponent,
    AddItemInputComponent
  ],
  imports: [

    FormsModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
