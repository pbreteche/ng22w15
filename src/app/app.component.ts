import { Component } from '@angular/core';
import { Task } from './task';
import { TasksStorageService } from './tasks-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liste de tâches';
  tasks: Task[];
  newTask = new Task();
  selectedTask?: Task;

  constructor(private storage: TasksStorageService) {
    this.tasks = storage.load();
    this.selectedTask = this.tasks[0];
  }

  delete(i: number): void {
    this.tasks.splice(i, 1);
    this.storage.save(this.tasks);
  }

  add(): void {
    this.tasks.push(this.newTask);
    this.newTask = new Task();
    this.storage.save(this.tasks);
  }
}
