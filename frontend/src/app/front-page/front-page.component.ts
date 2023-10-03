import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


let todo_list: string[] | null

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})

export class FrontPageComponent {
  
  cookieService = inject(CookieService);
  user_todo_list = todo_list;

  constructor() { 
    // this.loadFakeItems()
    this.loadItems() 
  }

  loadFakeItems() {
    let temp = ['list item C', 'list item B', 'list item A']
    this.cookieService.set('todo_list', JSON.stringify(temp))    
    this.loadItems()
  }

  loadItems() {
    let retrievedJSON = this.cookieService.get('todo_list')
    if (retrievedJSON != null)
      todo_list = JSON.parse(retrievedJSON)

    // Reassigning user_todo_list to have updated todo_list
    this.user_todo_list = todo_list
  }
}
