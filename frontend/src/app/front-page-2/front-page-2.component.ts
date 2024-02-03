import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import {TodoItem} from "../todo-item.model";
import axios from "axios";

@Component({
  selector: 'front-page-2',
  templateUrl: './front-page-2.component.html',
  styleUrls: ['./front-page-2.component.css']
})
export class FrontPage2Component {
  todoCount = 7;
  repeatArray = new Array(this.todoCount);


  todosArray: TodoItem[] = [];

  /**
   * Constructor redirects to Login page if there is no user item in session storage
   * @param router meh don't worry about it
   */
  constructor (private router: Router) {
    if (!sessionStorage.getItem("user"))
      this.router.navigate(["login"])
    else {
      console.log(sessionStorage.getItem("user"))
      this.retrieveTodos()
    }
  }

  async retrieveTodos() : Promise<any> {
    // If user exists in sessionStorage, retrieve todos
    if (sessionStorage.getItem("user")) {

      const userData = sessionStorage.getItem("user")
      if (userData) {
        const user = JSON.parse(userData) as {
          name: string;
          username: string;
          hashed_password: string;
          salt: string;
          email: string;
          userImage: string | null;
        };
        console.log("we printing")
        const response = await axios.get('http://localhost:8080/api/todo/get_user_todos', {
          params: { user: user.username}
        })
          .then(response => {
            console.log("Response: ", response.data)
            sessionStorage.setItem("todos", JSON.stringify(response.data))
          })
          .catch(error => {
            console.log("Error: ", error);
          })

        // Proceed to load todos into page
        this.loadTodos()

      }
    }
  }

  loadTodos() {
    const todosString = sessionStorage.getItem("todos")
    if (todosString) {

    this.todosArray = JSON.parse(todosString);
    console.log(this.todosArray)







    }
  }

}
