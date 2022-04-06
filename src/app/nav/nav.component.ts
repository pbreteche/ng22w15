import { Component } from '@angular/core';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  tasks: Task[] = [];

  constructor(
    private storage: TasksStorageService,
  ) {
    storage.tasks.subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  delete(i: number): void {
    this.storage.delete(i);
  }
}
