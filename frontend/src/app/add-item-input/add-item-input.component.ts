import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'add-item-input',
  templateUrl: './add-item-input.component.html',
  styleUrls: ['./add-item-input.component.css']
})
export class AddItemInputComponent {
  
  cookieService = inject(CookieService);
  newItem: string = ''
  
  addItem() {

    let todo_list: string[] | null = []
    
    let retrievedJSON = this.cookieService.get('todo_list')
    if (retrievedJSON !== null)
      todo_list = JSON.parse(retrievedJSON)

    if (todo_list !== null && this.newItem !== '') {
      todo_list = [...todo_list, this.newItem]
      this.cookieService.set('todo_list', JSON.stringify(todo_list))
      this.newItem = ''
      window.location.reload()
    }
  }
}

