import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AddItemInputComponent } from './add-item-input/add-item-input.component';

import { FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthContentComponent } from './auth-content/auth-content.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    FrontPageComponent,
    AddItemInputComponent,
    LoginPageComponent,
    AuthContentComponent
  ],
  imports: [

    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
