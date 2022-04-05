import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  tasks: Task[];
  @Output()
  taskSelected = new EventEmitter<Task>();

  constructor(private storage: TasksStorageService) {
    this.tasks = storage.load();
  }
  
  select(task: Task): void {
    this.taskSelected.emit(task);
  }

  delete(i: number): void {
    this.tasks.splice(i, 1);
    this.storage.save(this.tasks);
  }
}
