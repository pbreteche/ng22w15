import { Component } from '@angular/core';
import { Task } from './task';
import { TasksStorageService } from './tasks-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask = new Task();
  selectedTask?: Task;

  constructor(private storage: TasksStorageService) {
    this.selectedTask = this.storage.first();
  }

  select(task: Task): void {
    this.selectedTask = task;
  }
}
