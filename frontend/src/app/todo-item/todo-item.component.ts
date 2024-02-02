import {Component, Input} from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() index!: number;



}
