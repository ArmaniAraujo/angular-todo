import { Component } from '@angular/core';

let todo_list: string[] = ['list item 1', 'list item 2', 'list item 3']



@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']

  

})




export class FrontPageComponent {
  todo_list = todo_list;
}
