import { Component } from '@angular/core';

/**
 * Phase 1
 * 
 * 1. Retrieve any lists from session
 * 2. If null, return nothing
 * 3. If not null, 
 *        parse from JSON to list
 *        return list
 * 
 * 
 * 
 * Phase 2
 * 1. Create new input and save buttons



*/


let todo_list: string[] | null
let temp = ['list item 1', 'list item 2', 'list item 3']
sessionStorage.setItem('todo_list', JSON.stringify(temp))

let retrievedJSON = sessionStorage.getItem('todo_list')
if (retrievedJSON != null)
  todo_list = JSON.parse(retrievedJSON)

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']

})

export class FrontPageComponent {
  user_todo_list = todo_list;
}
