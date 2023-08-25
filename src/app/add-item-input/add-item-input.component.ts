import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item-input',
  templateUrl: './add-item-input.component.html',
  styleUrls: ['./add-item-input.component.css']
})
export class AddItemInputComponent {

  newItem: string = ''
  
  addItem() {

    let todo_list: string[] | null = []
    
    let retrievedJSON = sessionStorage.getItem('todo_list')
    if (retrievedJSON !== null)
      todo_list = JSON.parse(retrievedJSON)

    if (todo_list !== null && this.newItem !== '') {
      todo_list = [...todo_list, this.newItem]
      sessionStorage.setItem('todo_list', JSON.stringify(todo_list))
      this.newItem = ''
      window.location.reload()
    }
  }

}
