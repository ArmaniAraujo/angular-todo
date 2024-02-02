import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthContentComponent } from './auth-content/auth-content.component';
import { FrontPage2Component } from './front-page-2/front-page-2.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthContentComponent,
    FrontPage2Component,
    TodoItemComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
