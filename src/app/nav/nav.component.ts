import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedTaskService } from '../selected-task.service';
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
    private selectedTaskService: SelectedTaskService
  ) {
    storage.tasks.subscribe((tasks: Task[]) => this.tasks = tasks);
  }
  
  select(task: Task): void {
    this.selectedTaskService.select(task);
  }

  delete(i: number): void {
    this.storage.delete(i);
  }
}
