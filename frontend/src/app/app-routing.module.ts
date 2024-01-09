import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  { path: '', component: FrontPageComponent }, // This is the starting page
  { path: 'login', component: LoginPageComponent }, // Login Pagee
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
