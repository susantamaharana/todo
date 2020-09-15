import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public items = [];

  public addNew;

  public addToList() {
    if (this.addNew == '') {
    } else {
      this.items.push(this.addNew);
      this.addNew = '';
    }
  }

  public removeItem(index) {
    this.items.splice(index, 1);
  }
}
