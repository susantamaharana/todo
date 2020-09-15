import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public items = [];

  public compltetedItems = 0;
  public pendingItems = 0;

  public addNew;

  public addToList() {
    if (this.addNew == '') {
    } else {
      let newObj = { task: this.addNew, status: false };
      this.items.push(newObj);
      this.addNew = '';
      this.currentItems();
    }
  }

  public currentItems() {
    this.compltetedItems = this.items.filter((x) => x.status).length;
    this.pendingItems = this.items.filter((x) => !x.status).length;
  }

  public status(index) {
    this.items[index].status = true;
    this.compltetedItems = this.items.filter((x) => x.status).length;
    this.pendingItems = this.items.filter((x) => !x.status).length;
  }

  public removeItem(index) {
    this.items.splice(index, 1);
    this.currentItems();
  }
}
