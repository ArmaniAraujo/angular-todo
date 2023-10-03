import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})



export class TodoItemComponent {

  cookieService = inject(CookieService)

  @Input() item = ''
  @Input() index: number = -1
  
  deleteItem(index: number) {

    alert('Going into function')

    let todo_list: string[] | null = []
    let retrievedJSON = this.cookieService.get('todo_list')
    if (retrievedJSON != null)
      todo_list = JSON.parse(retrievedJSON)
      if (todo_list !== null) {
        todo_list.splice(index, 1)
        
        // Writing new array with removed element back to sessionStorage
        this.cookieService.set('todo_list', JSON.stringify(todo_list))
        alert(this.cookieService.get('todo_list'))

        // Reloading page to load updated items in
        window.location.reload()

      }
  }

}
