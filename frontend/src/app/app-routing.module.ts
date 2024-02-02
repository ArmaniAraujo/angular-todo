import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FrontPage2Component} from "./front-page-2/front-page-2.component";

const routes: Routes = [
  // { path: '', component: FrontPageComponent }, // This is the starting page
  { path: '', component: LoginPageComponent }, // Login Page
  { path: 'login', component: LoginPageComponent }, // Login Page
  { path: 'front', component: FrontPage2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
