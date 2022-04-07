import { Component } from '@angular/core';
import { Task, TaskState } from '../../model/task';
import { TasksStorageService } from '../../service/tasks-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  tasks: Task[] = [];
  filter = 'Tous'; 
  stateOptions = ['Tous', TaskState.New, TaskState.InProgress, TaskState.Closed];

  constructor(
    private storage: TasksStorageService,
  ) {
    storage.tasks.subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(t => 'Tous' == this.filter || t.state == this.filter)
  }

  delete(i: number): void {
    this.storage.delete(i);
  }

  setFilter(e: any) {
    this.filter = e;
  }
}
