import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TodoItem} from "../Model/todo-item.model";
import axios from "axios";
import {User} from "../Model/user-model";

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  todosArray: TodoItem[] = [];

  /**
   * Constructor redirects to Login page if there is no user item in session storage
   * @param router to route to login page, meh don't worry about it
   */
  constructor (private router: Router) {
    if (!sessionStorage.getItem("user"))
      this.router.navigate(["login"])
    else {
      console.log(sessionStorage.getItem("user"))
      this.retrieveTodos()
    }
  }

  /**
   * Checks if user is in sessionStorage,
   * Returns todos based on that user
   */
  async retrieveTodos() : Promise<any> {
    if (sessionStorage.getItem("user")) { // If user exists in sessionStorage, retrieve todos
      const userData = sessionStorage.getItem("user") // Store user to const
      if (userData) { // If it exists, (honestly this is just for TS. its useless right now
        const user: User = JSON.parse(userData) // Store as a User object

        // Create axios request - to GET USER TODOS
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

  /**
   * Loads todos from sessionStorage to todosArray to be display
   */
  loadTodos() {
    const todosString = sessionStorage.getItem("todos")
    if (todosString) { this.todosArray = JSON.parse(todosString); }
  }

  /**
   * Logout function to clear sessionStorage and navigate to login page
   * Runs on Logout button click
   */
  logout() {
    sessionStorage.clear()
    this.router.navigate(["login"])
  }

  /**
   * Gets TodoItem from front and requests backend to delete.
   * Then calls retreiveTodos to get current list of todos.
   * @param item : TodoItem - Given from page frontpage when a COMPLETED button is clicked
   */
  async deleteTodo(item : TodoItem) {

    // Create axios request - to DELETE A TODOLIST ITEM
    const response = await axios.delete('http://localhost:8080/api/todo/delete', {
      params: { tid: item.tid }
    })
    .then(response => {
      console.log("Response: ", response.data)
      sessionStorage.setItem("todos", JSON.stringify(response.data))
    })
    .catch(error => {
      console.log("Error: ", error);
      alert("There was an error deleting your todo. Please close this window, reopen, and try again.")
    })

    // Proceed to retrieve todos into sessionStorage which then calls loadTodos()
    this.retrieveTodos()
  }

  /**
   * Grabs Details from text field, creates new TodoObject, and sends request to add to user
   * Then calls retreiveTodos to get current list of todos.
   */
  async addTodo() {

    // @ts-ignore - we are checking this later so shut up ts
    const newTodo = document.getElementById("newTodo").value
    // @ts-ignore - we are checking this later so shut up ts
    document.getElementById("newTodo").value = "" // Reset input field after grabbing details
    const userData = sessionStorage.getItem("user") // Get user details from session

    if (userData && newTodo) { // if user exists and new todoitem exists
      const user: User = JSON.parse(userData)

      // Create TodoItem object to send in request
      const todoItem: TodoItem = {
        // tid not needed, it will be auto incremented in backend
        uid: user.username,
        item: newTodo
      }

      // Create axios request - to ADD TO TODOLIST
      const response = await axios.post('http://localhost:8080/api/todo/add',todoItem)
        .then(response => {
          console.log("Response: ", response.data)
          this.retrieveTodos()
        })
        .catch(error => {
          console.log("Error: ", error);
        })
    }
    else {
      alert("There was an error with your login or adding a todo. Please close this window and try again")
    }
  }
}
