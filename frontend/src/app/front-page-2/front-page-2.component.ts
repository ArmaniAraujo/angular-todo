import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import {TodoItem} from "../Model/todo-item.model";
import axios from "axios";
import {User} from "../Model/user-model";

@Component({
  selector: 'front-page-2',
  templateUrl: './front-page-2.component.html',
  styleUrls: ['./front-page-2.component.css']
})
export class FrontPage2Component {

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
        const user: User = JSON.parse(userData)
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

  logout() {
    sessionStorage.clear()
    this.router.navigate(["login"])
  }



  async deleteTodo(item : TodoItem) {
    console.log(item.tid)

        const response = await axios.delete('http://localhost:8080/api/todo/delete', {
          params: { tid: item.tid }
        })
          .then(response => {
            console.log("Response: ", response.data)
            sessionStorage.setItem("todos", JSON.stringify(response.data))
          })
          .catch(error => {
            console.log("Error: ", error);
          })

        // Proceed to retrieve todos into page
        this.retrieveTodos()
  }

  async addTodo() {


    // @ts-ignore - we are checking this later so shut up ts
    const newTodo = document.getElementById("newTodo").value
    // @ts-ignore - we are checking this later so shut up ts
    document.getElementById("newTodo").value = ""
    const userData = sessionStorage.getItem("user")
    if (userData && newTodo) {
      const user: User = JSON.parse(userData)
      const todoItem: TodoItem = {
        // tid not needed, it will be auto incremented in backend
        uid: user.username,
        item: newTodo
      }

      const response = await axios.post('http://localhost:8080/api/todo/add',todoItem)
        .then(response => {
          console.log("Response: ", response.data)
          // sessionStorage.setItem("todos", JSON.stringify(response.data))
          this.retrieveTodos()
        })
        .catch(error => {
          console.log("Error: ", error);
        })


    }
  }




}
