import { Component } from '@angular/core';
import { TasksStorageService } from './tasks-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liste de tâches';
  tasks: string[];
  newTask = '';

  constructor(private storage: TasksStorageService) {
    this.tasks = storage.load();
  }

  delete(i: number): void {
    this.tasks.splice(i, 1);
    this.storage.save(this.tasks);
  }

  add(): void {
    this.tasks.push(this.newTask);
    this.newTask = '';
    this.storage.save(this.tasks);
  }
}
