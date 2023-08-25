import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']



})



export class TodoItemComponent {

  @Input() item = ''
  @Input() index: number = -1
  
  deleteItem(index: number) {

    let todo_list: string[] | null = []
    let retrievedJSON = sessionStorage.getItem('todo_list')
    if (retrievedJSON != null)
      todo_list = JSON.parse(retrievedJSON)
      if (todo_list !== null) {
        // alert((todo_list[index]))
        todo_list.splice(index, 1)
        
        // Writing new array with removed element back to sessionStorage
        sessionStorage.setItem('todo_list', JSON.stringify(todo_list))

        // Reloading page to load updated items in
        window.location.reload()
      }
  }

  add_item(item: string) {

  }
  
}
