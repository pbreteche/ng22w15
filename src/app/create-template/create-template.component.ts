import { Component } from '@angular/core';
import { SelectedTaskService } from '../selected-task.service';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  task = new Task();

  constructor(
    private tasksStorage: TasksStorageService,
    private selectedTask: SelectedTaskService
  ) {}

  save(): void {
    if (this.task.deadline) {
      this.task.deadline = new Date(this.task.deadline);
    }
    this.tasksStorage.push(this.task);
    this.selectedTask.select(this.task)
    this.task = new Task();
  }
}
