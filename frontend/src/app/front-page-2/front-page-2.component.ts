import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import {TodoItem} from "../todo-item.model";

@Component({
  selector: 'front-page-2',
  templateUrl: './front-page-2.component.html',
  styleUrls: ['./front-page-2.component.css']
})
export class FrontPage2Component {
  todoCount = 7;
  repeatArray = new Array(this.todoCount);


  fakeTodoArray: TodoItem[] = [
    { id: 1, task: 'Buy groceries for next week' },
    { id: 2, task: 'Renew car insurance' },
    { id: 3, task: 'Sign up for an online course' },
    { id: 4, task: 'Complete coding assignment' },
    { id: 5, task: 'Exercise for 30 minutes' },
  ];

  /**
   * Constructor redirects to Login page if there is no user item in session storage
   * @param router meh don't worry about it
   */
  constructor (private router: Router) {
    if (!sessionStorage.getItem("user"))
      this.router.navigate(["login"])
    else
      console.log(sessionStorage.getItem("user"))
  }

}
