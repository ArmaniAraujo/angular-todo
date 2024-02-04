import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FrontPageComponent} from "./front-page/front-page.component";

const routes: Routes = [
  // { path: '', component: FrontPageComponent }, // This is the starting page
  { path: '', component: LoginPageComponent }, // Login Page
  { path: 'login', component: LoginPageComponent }, // Login Page
  { path: 'front', component: FrontPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
