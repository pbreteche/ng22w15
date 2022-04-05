import { Component } from '@angular/core';
import { TasksLoaderService } from './tasks-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liste de tâches';
  tasks: string[];
  newTask = '';

  constructor(private loader: TasksLoaderService) {
    this.tasks = loader.load();
  }

  delete(i: number): void {
    this.tasks.splice(i, 1);
  }

  add(): void {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
}
